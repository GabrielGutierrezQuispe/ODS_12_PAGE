document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('complete_names').value.trim();
    const lastname = document.getElementById('complete_surnames').value.trim();
    const number = document.getElementById('cellphone').value.trim();
    const email = document.getElementById('email').value.trim();
    const request = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    if (!name || !lastname || !number || !email || !request || !terms) {
        Swal.fire({
            icon: 'error',
            title: 'Faltan datos',
            text: 'Por favor, completa todos los campos y acepta los términos.'
        });
        return;
    }

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                lastname,
                number,
                email,
                request
            })
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: 'Tu consulta ha sido procesada exitosamente.'
            });
            document.getElementById('contactForm').reset(); 
        } else {
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar tu consulta. Por favor, inténtalo nuevamente más tarde.'
        });
        console.error('Error:', error); 
    }
});