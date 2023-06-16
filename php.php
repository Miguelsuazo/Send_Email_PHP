<?php
//Datos ingresados.
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$adress = htmlspecialchars($_POST['adress']);
$message = htmlspecialchars($_POST['message']);


if (!empty($email) && !empty($message)) {
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $receiver = "miguelEj@ffff.com"; //Ingresa un email donde quieres que lleguen los  mensajes.
    $subject = "De: $name <$email>"; //Sujeto
    $body = "Nombre: $name\nEmail: $email\nTelefono: $phone\n Direccion:$adress\n Message:\n $message\n\nQue tengas buen dia,\n$name"; // Cuerpo del mensaje
    $sender = "From: $email"; // el email desde que se envio.
    if (mail($receiver, $subject, $body, $sender)) {
      echo "Tu mensaje se a enviado con exito!";
    } else {
      echo "Lo sentimos, en estos momentos no podemos enviar tu mensaje";
    }
  } else {
    echo "Debe ingresar un email valido";
  }
} else {
  echo "Debe ingresar un email y escribir su mensaje";
}
?>

