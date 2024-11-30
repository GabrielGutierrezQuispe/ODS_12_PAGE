document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir envío automático

        // Validar Nombre Completo
        const completeNames = document.getElementById("complete_names");
        if (!/^[A-Za-z\s]+$/.test(completeNames.value.trim())) {
            alert("Por favor, ingresa un nombre válido (solo letras).");
            completeNames.focus();
            return;
        }

        // Validar Apellidos
        const completeSurnames = document.getElementById("complete_surnames");
        if (!/^[A-Za-z\s]+$/.test(completeSurnames.value.trim())) {
            alert("Por favor, ingresa apellidos válidos (solo letras).");
            completeSurnames.focus();
            return;
        }

        // Validar Celular
        const cellphone = document.getElementById("cellphone");
        if (!/^\d{9}$/.test(cellphone.value.trim())) {
            alert("Por favor, ingresa un número de celular válido (9 dígitos).");
            cellphone.focus();
            return;
        }

        // Validar Correo Electrónico
        const email = document.getElementById("email");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            alert("Por favor, ingresa un correo electrónico válido.");
            email.focus();
            return;
        }

        // Validar Mensaje
        const message = document.getElementById("message");
        if (message.value.trim().length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            message.focus();
            return;
        }

        // Validar Checkbox
        const terms = document.getElementById("terms");
        if (!terms.checked) {
            alert("Debes aceptar los términos y condiciones.");
            terms.focus();
            return;
        }

        // Si todo es válido, mostrar mensaje de éxito
        Swal.fire({
            title: "¡Consulta enviada!",
            text: "Gracias por contactarnos. Te responderemos lo antes posible.",
            icon: "success",
            confirmButtonText: "Aceptar",
        });

        // Aquí puedes enviar el formulario
        form.reset(); // Limpiar el formulario después del envío
    });
});
