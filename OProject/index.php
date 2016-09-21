<?php
require 'vendor/autoload.php';
$router = new api\Router\Router ($_GET['url']);
$router->get ( '/', function () {
    header('location:./webapp/');
},'AccessPoint');
$router->get('/webapp/', function() {
	include('./webapp/index.html');
},'FrontRoute');
//Demande router
$router->get( '/Demande', 'Demande#findAll', 'findAllDemande');
$router->get( '/Demande/:id', 'Demande#findOne', 'findOneDemande');
$router->post( '/Demande', 'Demande#save', 'saveDemande');
$router->put( '/Demande', 'Demande#update', 'updateDemande');
$router->delete( '/Demande/:id', 'Demande#delete', 'deleteDemande');
try {
    $router->run ();
} catch (Exception $e) {
    echo "{\"error\":true, \"message\":\"".$e->getMessage()."\"}";
}
