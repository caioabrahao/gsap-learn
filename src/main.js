import { gsap } from 'gsap';

gsap.to('.box', { x: 300,});
gsap.to('.box', { y: -300, delay: .5});
gsap.to('.box', { x: -300, delay: 1});
gsap.to('.box', { y: 0, delay: 1.5,});
gsap.to('.box', { x: 0, delay: 2,});
gsap.to('.box', { height: 50, width: 250, delay: 2.5, onComplete: () => { spawnButton(); },});

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

gsap.to(".grid-element", { scale: .8, duration: 5, ease: "back.out", stagger:{
    each: 0.1,
    from: "center",
    grid: "auto",
    repeat: 1,
}});
