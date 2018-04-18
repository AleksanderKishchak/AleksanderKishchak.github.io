<?php
//принимаем постовые данные
$name = $_POST['name'];
$user_email = $_POST['email'];
$phone = $_POST['phone'];
$what = $_POST['what'];
//Тут указывает на какой ящик присылать письмо
$to = "sanya69876@gmail.com";
//Далее идет тема и само сообщение
$subject = "Заявка с моего макета";
$message = "Письмо отправлено из моей формы.
Имя: ".htmlspecialchars($name).
"Телефон: ".htmlspecialchars($phone).
"Почта клиента: ".htmlspecialchars($user_email).
"Комментарий: ".htmlspecialchars($what);
$headers = "From: mysite.ru <site-email@mysite.ru\r\nContent-type: text/html;
	charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
header('Location: index.html');
exit();
?>