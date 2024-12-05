import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);
gsap.registerPlugin(TextPlugin);


function summonBlocks(){
    gsap.set(".blocks-container", {display: 'flex',});
    gsap.from(".block", {opacity: 0, rotation: 180, y: 100, duration: 1, stagger: 0.1, ease: "bounce", delay: 1});
}

window.summonBlocks = summonBlocks;
summonBlocks();

//block hover animation

function blockHover(event){
    gsap.to(event.target, {scale: 1.1, rotation: -15, duration: 0.5, ease: "elastic"});
}
document.querySelectorAll(".block").forEach(block => {
    block.addEventListener("mouseenter", blockHover);
});

function blockHoverOut(event){
    gsap.to(event.target, {scale: 1, rotation: 0, duration: 0.5, ease: "back.out"});
}
document.querySelectorAll(".block").forEach(block => {
    block.addEventListener("mouseleave", blockHoverOut);
});

//text animation
gsap.to(".hero h1", { duration: 2, ease: "power1.inout", text: { value: "GSAP Learn", oldClass: "non-bold", newClass: "bold" } });
gsap.to(".hero p", { duration: 2, ease: "power1.inout", text: { value: "My attempt to learn GSAP!",} });

//scroll to functions

function scrollToSection2(){
    gsap.to(window, {duration: 1, scrollTo: ".sec2", ease: "power4.out"});
}
document.getElementById('scrollButton').addEventListener('click', scrollToSection2);


//social media icons animations
Draggable.create("#icon2", {
    type: "x, y",
    bounds: ".sec2",
    onDrag: handleDrag,
    onDragEnd: handleDragEnd
});

Draggable.create(".social-icon", {
    type: "x, y",
    bounds: ".sec2",
    onDrag: handleDrag,
    onDragEnd: handleDragEnd
});


//inertia functions

let velocity = { x: 0, y: 0 };
let lastPosition = { x: 0, y: 0 };
let isDragging = false;

let multiplier = 5;

function handleDrag() {
    if (isDragging) {
        velocity.x = this.x - lastPosition.x;
        velocity.y = this.y - lastPosition.y;
    }
    lastPosition.x = this.x;
    lastPosition.y = this.y;
    isDragging = true;
}

function handleDragEnd() {
    isDragging = false;
    gsap.to(this.target, {
        x: this.x + velocity.x * multiplier,
        y: this.y + velocity.y * multiplier,
        ease: "power2.out",
        duration: 1
    });
}




