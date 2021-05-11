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
$validator->fields(['service','source-lang','target-lang','name','email'])->areRequired();
$validator->field('email')->isEmail();
$validator->field('notes')->maxLength(6000);


$pp->requireReCaptcha();
$pp->getReCaptcha()->initSecretKey('6Ld9M9AaAAAAAM3GDrtm3Jv6gNVBvJzLGTLlT74g');


$pp->sendEmailTo('info@tekken254.co.ke');

echo $pp->process($_POST);