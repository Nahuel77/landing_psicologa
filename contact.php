<?php
    $to = "psicanalisegss@gmail.com";
    $subject = "Mensagem da sua landing page";
    $mensaje = "Nombre: " . $_POST['nombre'] . "\n";
    $mensaje .= "Email: " . $_POST['email'] . "\n";
    $mensaje .= "Mensaje: " . $_POST['mensaje'];

    $headers = "From: contacto@tudominio.com";

    if (mail($to, $subject, $mensaje, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
?>