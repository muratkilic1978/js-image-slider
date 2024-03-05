"use strict";

const bodyElem = document.querySelector("body");

const slidesElem = document.querySelectorAll(".slide");

const leftBtn = document.getElementById("left");

const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener('click', () =>{
    activeSlide++;

    if(activeSlide > slidesElem.length - 1 ) {
        activeSlide = 0;
    }
// Husk at kalde på funktionen setActiveSlide()
setActiveSlide();
console.log("Current activeSlide:", activeSlide);
});

leftBtn.addEventListener('click', () =>{
    activeSlide--;

    if(activeSlide < 0) {
        activeSlide = slidesElem.length - 1;
    }

// Husk at kalde på funktionen setActiveSlide()
setActiveSlide();
console.log("Current activeSlide:", activeSlide);
});

function setActiveSlide(){
    slidesElem.forEach((elem) => elem.classList.remove('active'));

    slidesElem[activeSlide].classList.add('active');
}



