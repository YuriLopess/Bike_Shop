const textSlides = document.querySelectorAll(".text--slides h1");
const slides = document.querySelectorAll(".img--slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        textSlides[slideIndex].classList.add("displaySlide");
    }
    startSlideShow(); 
}

function showSlide(index){
    if(index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

    textSlides.forEach(textSlide => {
        textSlide.classList.remove("displaySlide");
    });
    textSlides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function startSlideShow() {
    intervalId = setInterval(nextSlide, 10000); 
}

function stopSlideShow() {
    clearInterval(intervalId);
}

document.querySelector(".slider").addEventListener("mouseenter", stopSlideShow);

document.querySelector(".slider").addEventListener("mouseleave", startSlideShow);
