document.addEventListener("DOMContentLoaded", function() {  
    document.getElementById("btnDarkMode").addEventListener("click", function() {  
        // Cambiar el fondo del body  
        document.body.classList.toggle("dark-mode");  

        // Cambiar otros elementos que deben reflejar el modo oscuro  
        const containers = document.querySelectorAll(".container, .historia-contenido");  
        const header = document.querySelector(".section.valores");  
        const footer = document.querySelector("footer"); // Asegúrate de que el footer existe  
        const darkModeIcon = document.getElementById("darkModeIcon");  
        const navLinks = document.querySelectorAll("nav ul li a"); // Asegúrate de que el selector sea correcto  

        header.classList.toggle("dark-mode");  
        containers.forEach(container => container.classList.toggle("dark-mode"));  
        footer.classList.toggle("dark-mode");  
        
        navLinks.forEach(link => {  
            link.classList.toggle("dark-mode");  
        });  
        
        // Cambiar el ícono según el estado del modo oscuro  
        if (document.body.classList.contains("dark-mode")) {  
            darkModeIcon.classList.replace("ri-sun-line", "ri-moon-line"); // Cambiar a ícono de luna  
        } else {  
            darkModeIcon.classList.replace("ri-moon-line", "ri-sun-line"); // Cambiar a ícono de sol  
        }  
    });  
});