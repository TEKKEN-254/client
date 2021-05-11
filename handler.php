<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['contact-name','contact-email'])->areRequired();
$validator->field('contact-email')->isEmail();
$validator->field('contact-message')->maxLength(6000);


$pp->requireReCaptcha();
$pp->getReCaptcha()->initSecretKey('6LfL9NQZAAAAANo-S72YiqOuUaPlTtpRraRDrppY');


$pp->sendEmailTo('info@tekken254.co.ke');

echo $pp->process($_POST);