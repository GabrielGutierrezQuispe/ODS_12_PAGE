const MAIN_PATH = "http://127.0.0.1:3000/api/";

const date = new Date();
const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');

document.getElementById("month").textContent = months[date.getMonth()];
document.getElementById("day").textContent = days[date.getDay()];
document.getElementById("date").textContent = date.getDate();
document.getElementById("year").textContent = date.getFullYear();

const eventInfoContainer = document.querySelector(".event-info");

fetch(MAIN_PATH + "dates/" + currentDate)
    .then(res => res.json())
    .then(data => {
        if (data && data.nombre && data.descripcion) {
            eventInfoContainer.style.display = "block";
            document.querySelector(".event-info h3").textContent = "Evento del Día";
            document.querySelector(".event-info p:nth-of-type(1)").textContent = "Nombre: " + data.nombre;
            document.querySelector(".event-info p:nth-of-type(2)").textContent = "Descripción: " + data.descripcion;
        } else {
            eventInfoContainer.style.display = "none";
        }
    })
    .catch(error => {
        console.error('Error al obtener la fecha:', error);
        eventInfoContainer.style.display = "none"; 
    });
