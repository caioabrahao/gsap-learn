import { gsap } from 'gsap';

let tl = gsap.timeline();

tl.to('.box', { x: 300,});
tl.to('.box', { y: -300,},);
tl.to('.box', { x: -300,});
tl.to('.box', { y: 0,});
tl.to('.box', { x: 0,});
tl.to('.box', { height: 50, width: 250, onComplete: () => { spawnButton(); },});

function spawnButton(){
    gsap.set('.box', {display: 'none',});
    gsap.set('.button', {display: 'block',});
}

function summonBlocks(){
    gsap.set(".blocks-container", {display: 'flex',});
    gsap.from(".block", {opacity: 0, rotation: 180, y: 100, duration: 1, stagger: 0.1, ease: "bounce",});
}

window.summonBlocks = summonBlocks;

gsap.from(".hero h1", { duration: 1, x: 300, opacity: 0, scale: 0.5, rotation: 360, ease: "elastic",});
gsap.from(".hero p", { duration: 1, opacity: 0, y: 100, ease: "bounce", delay: .5,});

let tl2 = gsap.timeline({repeat: -1, repeatDelay: 1,});

tl2.to(".grid-element", { scale: .8, duration: 2, ease: "back.out", stagger:{
    each: 0.2,
    from: "center",
    grid: "auto",
}});
tl2.to(".grid-element", { scale: 1, duration: 2, ease: "back.out", stagger:{
    each: 0.3,
    from: "center",
    grid: "auto",
}});
