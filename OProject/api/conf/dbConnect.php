<?php

$serverName = "HP-PAVILION2";
$connectionInfo = array( "Database"=>"DB_OProject");
$conn = sqlsrv_connect( $serverName, $connectionInfo);


if( $conn ) {
     echo "Connexion �tablie.<br />";
}else{
     echo "La connexion n'a pu �tre �tablie.<br />";
     die( print_r( sqlsrv_errors(), true));
}
	
	