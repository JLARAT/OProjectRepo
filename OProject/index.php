<?php
require 'vendor/autoload.php';
$router = new Api\Router\Router ($_GET['url']);
$router->get ( '/', function () {
    header('location:./webapp/');
},'AccessPoint');
$router->get('/webapp/', function() {
	include('./webapp/index.html');
},'FrontRoute');
//Produit router
$router->get( '/Produit', 'Produit#findAll', 'findAllProduit');
$router->get( '/Produit/:id', 'Produit#findOne', 'findOneProduit');
$router->post( '/Produit', 'Produit#save', 'saveProduit');
$router->put( '/Produit', 'Produit#update', 'updateProduit');
$router->delete( '/Produit/:id', 'Produit#delete', 'deleteProduit');
try {
    $router->run ();
} catch (Exception $e) {
    echo "{\"error\":true, \"message\":\"".$e->getMessage()."\"}";
}
