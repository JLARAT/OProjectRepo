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
			$hostname = "127.0.0.1";           
			$dbname = "DB_OProject";            
			$username = "Pentaho";            
			$pw = "admin";  
			$this->pdo = new \PDO ("sqlsrv:server=$hostname;database=$dbname","$username","$pw");
			
        } catch (\PDOException $e) {
            return array(
                "erreur" => "Database communication error"
            );
        }
    }
}