document.addEventListener("DOMContentLoaded", function() {
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');
    let slider = document.querySelector('.slider');
    let sliderList = slider.querySelector('.slider .list');
    let thumbnail = document.querySelector('.thumbnail');
    let thumbnailItems = thumbnail.querySelectorAll('.item');
    
    let toggleThumbnailBtn = document.querySelector('.toggle-thumbnail');
    toggleThumbnailBtn.textContent = '📁 Ocultar ODS';

    toggleThumbnailBtn.onclick = function() {
        toggleThumbnail();
    };

    function toggleThumbnail() {
        if (thumbnail.style.display === 'none' || thumbnail.style.display === '') {
            thumbnail.style.display = 'grid';
            toggleThumbnailBtn.textContent = '📁 Ocultar ODS';
        } else {
            thumbnail.style.display = 'none';
            toggleThumbnailBtn.textContent = '📁 Ver ODS';
        }
    }
    nextBtn.onclick = function() {
        moveSlider('next');
    };
    
    prevBtn.onclick = function() {
        moveSlider('prev');
    };
    
    function moveSlider(direction) {
        let sliderItems = sliderList.querySelectorAll('.item');
        let thumbnailItems = document.querySelectorAll('.thumbnail .item');

        if (direction === 'next') {
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            slider.classList.add('next');
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
            slider.classList.add('prev');
        }

        slider.addEventListener('animationend', function() {
            slider.classList.remove(direction);
        }, {once: true});
    }
    thumbnailItems.forEach((item) => {
        item.addEventListener("click", () => {
            const index = item.getAttribute("data-index");
            moveToSection(index);
        });
    });

    function moveToSection(index) {
        const items = Array.from(sliderList.children);
        const currentIndex = items.findIndex(item => item.getAttribute("data-index") === index);
        if (currentIndex >= 0) {
            for (let i = 0; i < currentIndex; i++) {
                sliderList.appendChild(sliderList.firstElementChild);
            }
        }
    }
});
