/**
 * Created by JOCLAR on 25/08/2016.
 */

app.controller('mainController', function ($scope, $location) {
    $scope.nbDemande = 26;
    $scope.nbFacture = 12;
    $scope.nbRegulation = 20;
    $scope.nbImpaye = 4;

});
app.controller('sectionHomeController', function ($scope, $state) {

});

app.controller('sectionConnectionController', function ($scope, $location) {
    $scope.connexionLogin = "";
    $scope.connexionPassword = "";

    $scope.connectionHome = function () {

        $("#containerConnexion").addClass('animated fadeOutDown').delay(1000).then($location.state('/home.overview'));
    };
});

app.controller('sectionOverviewController', function ($scope, $location) {

    $scope.DetailsDemande = function () {
        $location.path('/demande');
    };

    $scope.DetailsFacture = function () {
        $location.path('/facture');
    };

    $scope.DetailsRegulation = function () {
        $location.path('/regulation');
    };

    $scope.DetailsImpaye = function () {
        $location.path('/impaye');
    };
});

app.controller('sectionDemandeController', function ($scope, $location) {

    $scope.demandes = [];
    $scope.demande = {};
    $scope.demande1 = {
        "id": 1,
        "libelle": "1ere demande",
        "actif": true
    };
    $scope.demande2 = {
        "id": 2,
        "libelle": "2e demande",
        "actif": true
    };
    $scope.demande3 = {
        "id": 3,
        "libelle": "3e demande",
        "actif": false
    };
    $scope.demandes.push($scope.demande1, $scope.demande2, $scope.demande3);

    $scope.saveDemande = function () {
        $scope.demandes.push({
                "id": $scope.demandes.length + 1,
                "libelle": $scope.demande.libelle,
                "actif": $scope.demande.actif
            }
        );
        toastr.success("Demande ajout&eacute;e");
    }

    $scope.editDemande = function(d){
        $scope.demande.id = d.id;
        $scope.demande.libelle = d.libelle;
        $scope.demande.actif = d.actif;
    };

    $scope.backOverview = function () {
        $location.path('/overview');
    };
});

app.controller('sectionFactureController', function ($scope, $location) {
    $scope.backOverview = function () {
        $location.path('/overview');
    };
});

app.controller('sectionRegulationController', function ($scope, $location) {
    $scope.backOverview = function () {
        $location.path('/overview');
    };
});

app.controller('sectionImpayeController', function ($scope, $location) {
    $scope.backOverview = function () {
        $location.path('/overview');
    };
});