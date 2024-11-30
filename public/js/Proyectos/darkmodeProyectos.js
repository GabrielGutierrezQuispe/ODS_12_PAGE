const toggleButton = document.getElementById('btnDarkMode');
const body = document.body;
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav ul li a');
const container = document.querySelector('.container');
const posts = document.querySelectorAll('.post');
const footer = document.querySelector('footer');
const darkModeIcon = document.getElementById('darkModeIcon');

toggleButton.addEventListener("click", () => { // Evento que escucha el click
    body.classList.toggle("dark-mode"); // Se pone la clase dark-mode

    // Cambiar el icono de sol a luna o viceversa
    if (body.classList.contains("dark-mode")) {
        darkModeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    } else {
        darkModeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    }

    // Cambiar estilos de otros elementos si es necesario
    header.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    posts.forEach(post => {
        post.classList.toggle("dark-mode");
    });

    navLinks.forEach(link => {
        link.classList.toggle("dark-mode");
    });
});
