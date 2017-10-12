<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей

        if($_POST['user_name'] == "")    $errors[] = "Поле з іменем обов'язкове для заповнення";
        if($_POST['phone'] == "")   $errors[] = "Поле з номером телефону обов'язкове для заповнення";
        if($_POST['text_comment'] == "") $errors[] = "Поле з текстом обов'язкове для заповнення";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message .= "Ім'я замовника: " . $_POST['user_name'] . "<br/>";
        $message .= "Телефон замовника: " . $_POST['phone'] . "<br/>";
        $message .= "E-mail замовника: " . $_POST['user_email'] . "<br/>";
        $message .= "Текст повідомлення: " . $_POST['text_comment'];      
        send_mail($message); // отправим письмо
        
        $msg_box = "<span style='color: green;'>Повідомлення відправлено успішно!</span>";

    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "masjaha88@gmail.com"; 
        // тема письма
        $subject = "Моє портфоліо";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Лист <no-reply@test.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);

    }
     
?>