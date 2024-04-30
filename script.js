document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario
    const form = document.getElementById("reservation-form");

    // Agregar un event listener para el evento submit del formulario
    form.addEventListener("submit", function(event) {
        // Detener el envío del formulario
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;
        const fecha = document.getElementById("fecha").value;

        // Realizar cualquier validación adicional de los datos aquí
        // Por ejemplo, validar que los campos no estén vacíos

        if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || mensaje.trim() === '' || fecha.trim() === '') {
            alert("Por favor, complete todos los campos.");
            return; // Detener el proceso si hay campos vacíos
        }

        // Si todos los campos están completos, enviar el formulario
        // Puedes realizar aquí cualquier acción adicional, como enviar datos a un servidor o mostrar un mensaje de éxito
        alert("Formulario enviado con éxito. Gracias por tu reserva.");

        // Puedes reiniciar el formulario después de enviarlo
        form.reset();
    });
});