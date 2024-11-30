document.addEventListener("DOMContentLoaded", function () {  
    // Selecciona todos los elementos que van a ser animados  
    const productHeaderImage = document.querySelector('.product-header-image');  
    const productDetails = document.querySelector('.product-details');  
    const sustainability = document.querySelector('.sustainability');  

    // Añade la clase activa para animar  
    setTimeout(() => productHeaderImage.classList.add('active'), 100); // Retraso corto para el efecto de secuencia  
    setTimeout(() => productDetails.classList.add('active'), 300); // Un poco más de retraso  
    setTimeout(() => sustainability.classList.add('active'), 500); // Más retraso para el último  
});  

document.addEventListener("DOMContentLoaded", function () {  
    const benefits = document.querySelector('.sustainability-benefits');  
    benefits.classList.add('active'); // Añade la clase activa para animar  
});  

document.addEventListener("DOMContentLoaded", function () {  
    const reviews = document.querySelectorAll('.review');  
    let delay = 0;  

    reviews.forEach((review) => {  
        setTimeout(() => {  
            review.classList.add('active'); // Añade la clase activa para animar  
        }, delay);  
        delay += 300; // Retraso entre cada revisión  
    });  
});  

document.addEventListener("DOMContentLoaded", function () {  
    const images = document.querySelectorAll('.related-item img');  
    images.forEach((img) => {  
        img.classList.add('bounce-effect');  // Agrega la clase para iniciar la animación  
    });  
});

