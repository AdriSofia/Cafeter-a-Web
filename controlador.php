<?php
// Verificar si se han enviado datos a través del método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $fecha = $_POST["fecha"]; // Nueva variable para la fecha

    // Aquí puedes realizar cualquier validación adicional de los datos recibidos
    
    // Por ejemplo, puedes enviar un correo electrónico de confirmación al usuario o guardar los datos en una base de datos
    
    // En este ejemplo, simplemente mostraremos los datos recibidos
    echo "<h2>Datos recibidos:</h2>";
    echo "<p>Nombre: $nombre</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Teléfono: $telefono</p>";
    echo "<p>Mensaje: $mensaje</p>";
    echo "<p>Fecha: $fecha</p>"; // Mostrar la fecha
} else {
    // Si no se han enviado datos a través del método POST, redirigir al formulario de reserva
    header("Location: formulario_reserva.html");
    exit();
}
?>