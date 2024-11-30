const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateCarouselPosition() {
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarouselPosition();
    } else {
        currentIndex = 0;
        updateCarouselPosition();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    } else {
        currentIndex = slides.length - 1;
        updateCarouselPosition();
    }
}
