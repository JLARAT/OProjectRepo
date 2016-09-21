/**
 * Created by JOCLAR on 25/08/2016.
 */

angular.module('DemandeApp').factory('DemandeService',['$http', function($http){
    const URL ='../Demande';
    return {
        fetchAll : function(){
            return $http.get(URL);
        },
        fetch : function(id){
            return $http.get(URL+'/id');
        },
        save : function(object){
            return $http.post(URL,object);
        },
        delete : function(object){
            return $http.delete(URL+'/'+object.id);
        },
        update : function(object){
            return $http.put(URL,object);
        }
    }
}]);