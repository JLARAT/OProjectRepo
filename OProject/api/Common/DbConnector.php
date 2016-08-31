<?php
namespace api\Common;
class DbConnector{
    private static $instance;
    public $pdo;
    public static function getInstance(){
        if (is_null(self::$instance)) {
            self::$instance = new DbConnector();
        }
        return self::$instance;
    }
    private function __construct(){
            try {
			$co = "sqlsrv:Server=localhost;Database=bddtest";
			$c = new PDO($co, "Orpea", "aze123");
			
            // $dsn = "mysql:dbname=api;host=localhost";
            // $this->pdo = new \PDO($dsn, "root", "MySql69003@");
        } catch (\PDOException $e) {
            return array(
                "erreur" => "Database communication error"
            );
        }
    }
}