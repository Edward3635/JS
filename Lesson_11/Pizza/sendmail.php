<?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;

// require "PHPMailer/src/PHPMailer.php";
// require "PHPMailer/src/SMTP.php";

// $mail = new PHPMailer(true);
// $mail->Charset = 'UTF-8';
// $mail->setLanguage('ru', 'phpmailer/language/');
// $mail->IsHTML(true);

// $mail->setFrom('edgard3635@gmail.com', 'Frontend Developer');
// $mail->addAddress('edgard3635@gmail.com');
// $mail->Subject = "Hello, I'm frontend developer!";

// $body = '<h1>Зустрічай супер листа!</h1>';

// if (trim(!empty($_POST['name']))) {
// 	$body.= "<p><strong>Ім'я:</strong> " .$_POST['name'] . '</p>';
// }

// if (trim(!empty($_POST['email']))) {
// 	$body.= "<p><strong>E-mail:</strong> " .$_POST['email'] . '</p>';
// }

// if (trim(!empty($_POST['phone']))) {
// 	$body.= "<p><strong>Phone:</strong> " .$_POST['phone'] . '</p>';
// }

// if (!$mail->send()) {
// 	$message = 'Помилка';
// } else {
// 	$message = 'Дані відправлені';
// }

// $response = ['message' => $message];
// header('Content-type: application/json');
// echo json_encode($response);





// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $email = $_POST['email'];

// $name = htmlspecialchars($name);
// $phone = htmlspecialchars($phone);
// $email = htmlspecialchars($email);

// $name = urldecode($name);
// $phone = urldecode($phone);
// $email = urldecode($email);

// $name = trim($name);
// $phone = trim($phone);
// $email = trim($email);

// if (mail(
// 	'edgard3635@gmail.com',
// 	'New message from site',
// 	'From: no-reply@gmail.com \r\n'
// )) {
// 	header('location:thank-you.html');
// }



// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $email = $_POST['email'];

// $to = "edgard3635@gmail.com"; 
// $date = date ("d.m.Y"); 
// $time = date ("h:i");
// $from = $email;
// $subject = "Заявка c сайта";


// $msg="
// Имя: $name /n
// Телефон: $phone /n
// Почта: $email";
// //Текст: $text"; 	
// mail($to, $subject, $msg, "From: $from ");


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$pizzaSize = $_POST['pizzaSize'];
$sauce = $_POST['sauce'];
$topping = $_POST['topping'];
$price = $_POST['price'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$pizzaSize = htmlspecialchars($pizzaSize);
$sauce = htmlspecialchars($sauce);
$topping = htmlspecialchars($topping);
$price = htmlspecialchars($price);

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$pizzaSize = urldecode($pizzaSize);
$sauce = urldecode($sauce);
$topping = urldecode($topping);
$price = urldecode($price);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$pizzaSize = trim($pizzaSize);
$sauce = trim($sauce);
$topping = trim($topping);
$price = trim($price);

$message = "
Вітаємо!
Замовлення з сайту Domino's Pizza
Name: $name;
E-mail: $email;
Phone: +$phone;
Розмір піци: $pizzaSize;
Соуси: $sauce;
Начинка: $topping;
Ціна: $price;
Цей лист сформовано автоматично і не потребує відповіді.
Ми отримали ваше замовлення і його почнуть виконувати найближчим часом.
З повагою, студент JS без підтримки. 
Dominos Pizza-project(Конструктор піци, Drag-n-Drop, відправка замовлення-форми на пошту).

P.S. проект https://edward3635.github.io/JS/Lesson_11/Pizza/index.html
Але на цьому безкоштовному хостингу не підтримується відправка пошти, був використаний локальний Open Server для відправки цього повідомлення.";

mail(
	$email,
	"Замовлення піци",
	$message
);
