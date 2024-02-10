<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$response = file_get_contents('php://input');

if ($response === false) {
    die('Failed to fetch data from the API');
} else {
    $data = json_decode($response);
}

$messageBody = "Company Name: ". $data->companyName . '<br/>' . PHP_EOL
            ."FullName: ". $data->fullName . '<br/>' . PHP_EOL
            ."Email: ". $data->email . '<br/>' . PHP_EOL
            ."Phone Number: ". $data->phone . '<br/>' . PHP_EOL
            ."Vehicle Model: ".$data->vehicleModel . '<br/>' . PHP_EOL
            ."Container Size: ". $data->containerSize . '<br/>' . PHP_EOL
            ."ReeferUnit: ". $data->reeferUnit . '<br/>' . PHP_EOL
            ."Temperature: ". $data->temperature . '<br/>' . PHP_EOL
            ."Vehicle Quantity: ". $data->vehicleQuantity . '<br/>' . PHP_EOL
            ."No of Tyres: ". $data->noOfTyres . '<br/>' . PHP_EOL;

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'jindalnav23@gmail.com';                     //SMTP username
    $mail->Password   = 'ozct qssq hxtw ruxm';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('jindalnav23@gmail.com');
    $mail->addAddress($data->email);
   //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is Order is from '. $data->fullName;
    $mail->Body    = 'This are the details of the order <br/>'. PHP_EOL
                    . $messageBody;
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}