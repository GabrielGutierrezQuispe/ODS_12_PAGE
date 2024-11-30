let slideIndex = 0;
const slideInterval = 4000; 

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    indicators.forEach((indicator, index) => {
        indicator.className = (index === slideIndex) ? 'indicator active' : 'indicator';
    });

    slideIndex = (slideIndex + 1) % slides.length;
}

function currentSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.indicator');

    slideIndex = n - 1; 
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    indicators.forEach((indicator, index) => {
        indicator.className = (index === slideIndex) ? 'indicator active' : 'indicator';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(showSlides, slideInterval);
});
