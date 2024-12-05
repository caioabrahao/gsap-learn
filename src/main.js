import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


function summonBlocks(){
    gsap.set(".blocks-container", {display: 'flex',});
    gsap.from(".block", {opacity: 0, rotation: 180, y: 100, duration: 1, stagger: 0.1, ease: "bounce", delay: 1});
}

window.summonBlocks = summonBlocks;
summonBlocks();

//text animation
gsap.to(".hero h1", { duration: 2, ease: "power1.inout", text: { value: "GSAP Learn", oldClass: "non-bold", newClass: "bold" } });
gsap.to(".hero p", { duration: 2, ease: "power1.inout", text: { value: "My attempt to learn GSAP!",} });



//background grid animation

gsap.from(".grid-element", { opacity: 0, scale: 1.2, duration: 3, ease: "back.out", stagger:{
    each: 0.1,
    from: "start",
    grid: "auto",
}});

let tl2 = gsap.timeline({repeat: -1, delay: 3});

tl2.to(".grid-element", { scale: .8, duration: 2, ease: "back.out", stagger:{
    each: 0.1,
    from: "center",
    grid: "auto",
}});
tl2.to(".grid-element", { scale: 1, duration: 2, ease: "back.out", stagger:{
    each: 0.1,
    from: "center",
    grid: "auto",
}});
