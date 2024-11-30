const btnDarkMode = document.getElementById("btnDarkMode");
const body = document.getElementById("body");  //Extrae elementos del html por id//
const darkModeIcon = document.getElementById("darkModeIcon");

btnDarkMode.addEventListener("click", () => { //Evento que escucha el click//
    body.classList.toggle("darkmode"); //Se pone la clase darkmode//
    
    // Cambiar el icono de sol a luna o viceversa
    if (body.classList.contains("darkmode")) {
        darkModeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    } else {
        darkModeIcon.classList.replace("ri-moon-line", "ri-sun-line");
    }
});  