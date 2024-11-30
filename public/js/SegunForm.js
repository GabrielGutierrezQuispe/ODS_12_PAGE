document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita la recarga o redirección del formulario

    // Obtener valores de los campos
    const nombre = document.getElementById('contact-first-name').value.trim();
    const apellido = document.getElementById('contact-last-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const mensaje = document.getElementById('contact-message').value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !apellido || !email || !mensaje) {
        Swal.fire({
            icon: 'error',
            title: 'Faltan datos',
            text: 'Por favor, completa todos los campos.'
        });
        return;
    }

    try {
        // Enviar los datos al servidor
        const response = await fetch('/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, apellido, email, mensaje })
        });

        if (response.ok) {
            // Mostrar modal de éxito y limpiar el formulario
            Swal.fire({
                icon: 'success',
                title: 'Mensaje Enviado',
                text: 'Tu mensaje se ha enviado correctamente.'
            });
            document.getElementById('contactForm').reset(); // Limpia el formulario
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        // Mostrar mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente.'
        });
        console.error('Error:', error);
    }
});
