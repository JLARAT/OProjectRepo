/**
 * Created by JOCLAR on 25/08/2016.
 */

app.controller('mainController', function ($scope, $location) {
    $scope.nbDemande = 26;
    $scope.nbFacture = 12;
    $scope.nbRegulation = 20;
    $scope.nbImpaye = 4;


});

app.controller('sectionConnectionController', function($scope, $location){
    $scope.Connect = function(){
      $location.path('/overview');
    };
});

app.controller('sectionOverviewController', function($scope, $location){
    $scope.DetailsDemande = function(){
        $location.path('/demande');
    };

    $scope.DetailsFacture = function(){
        $location.path('/facture');
    };

    $scope.DetailsRegulation = function(){
        $location.path('/regulation');
    };

    $scope.DetailsImpaye = function(){
        $location.path('/impaye');
    };
});

app.controller('sectionDemandeController', function($scope, $location){
    $scope.backOverview = function(){
        $location.path('/overview');
    };
});

app.controller('sectionFactureController', function($scope, $location){
    $scope.backOverview = function(){
        $location.path('/overview');
    };
});

app.controller('sectionRegulationController', function($scope, $location){
    $scope.backOverview = function(){
        $location.path('/overview');
    };
});

app.controller('sectionImpayeController', function($scope, $location){
    $scope.backOverview = function(){
        $location.path('/overview');
    };
});