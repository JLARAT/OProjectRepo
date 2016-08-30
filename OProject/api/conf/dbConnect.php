<?php

$serverName = "HP-PAVILION2";
$connectionInfo = array( "Database"=>"DB_OProject");
$conn = sqlsrv_connect( $serverName, $connectionInfo);


if( $conn ) {
     echo "Connexion établie.<br />";
}else{
     echo "La connexion n'a pu être établie.<br />";
     die( print_r( sqlsrv_errors(), true));
}
	
	