<?php
namespace api\Repository;
use api\Model\Demande;
use api\Common\DbConnector;
class DemandeRepository implements Repository{
    private $dbConnector;
    public function __construct (){
        $this->dbConnector = DbConnector::getInstance();
    }
    public function findAll(){
		$stmt = $this->dbConnector->pdo->prepare("SELECT * FROM DEMANDE");
        $stmt->execute();
        $stmt->setFetchMode(\PDO::FETCH_ASSOC);
        $result = $stmt->fetchAll();
        return $result;
    }
    public function findOne($id=0){
        $stmt = $this->dbConnector->pdo->prepare('SELECT id, libelle_demande, actif FROM DEMANDE  WHERE id = :id');
         $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        $stmt->setFetchMode(\PDO::FETCH_ASSOC);
        $result = $stmt->fetch();
        return $result;
    }
    public function save($object=[]){
        $stmt = $this->dbConnector->pdo->prepare('INSERT INTO DEMANDE(`libelle_demande`, `actif`)  VALUES (:libelle_demande, :actif)');
        $stmt->bindParam('libelle_demande', $object->libelle_demande, \PDO::PARAM_STR);
        $stmt->bindParam('actif', $object->actif, \PDO::PARAM_STR);
        $stmt->execute();
        return $this->dbConnector->pdo->lastInsertId();
    }
    public function update($object=[]){
        $stmt = $this->dbConnector->pdo->prepare('UPDATE DEMANDE SET  libelle_demande = :libelle_demande,  actif = :actif WHERE id = :id');
         $stmt->bindParam(':id', $object->id, \PDO::PARAM_INT);
        $stmt->bindParam('libelle_demande', $object->libelle_demande, \PDO::PARAM_STR);
        $stmt->bindParam('actif', $object->actif, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->rowCount();
    }
    public function delete($id=0){
        $stmt = $this->dbConnector->pdo->prepare('DELETE FROM DEMANDE  WHERE id = :id');
         $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount();
    }
}
