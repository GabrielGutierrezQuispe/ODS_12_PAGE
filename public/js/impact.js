document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    showImage(currentIndex);

    setInterval(nextImage, 5000);
});