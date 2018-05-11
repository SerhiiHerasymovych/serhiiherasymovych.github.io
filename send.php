<?php
$to = "serhiiherasymovych@gmail.com";
$subject = "Темаписьма";
$message = "Имя: ".$_POST['name']."
E-mail: ".$_POST['e-mail']."
Сообщение: ".$_POST['message'];
$header = "From: Имя_отправителя <Адрес_отправителя>\r\nContent-type: text/html; charset=utf-8\r\n;";
if (mail($to, $subject, $message, $header)) {
  echo ('Успешно отправлено!');
}
else {
  echo ('Ошибка!');
}
?>
