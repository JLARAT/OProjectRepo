/**
 * Created by JOCLAR on 25/08/2016.
 */

app.controller('mainController', function ($scope, $state) {
    $scope.showLoader = false;
    $scope.nbDemande = 26;
    $scope.nbFacture = 12;
    $scope.nbRegulation = 20;
    $scope.nbImpaye = 4;
    $scope.connexionToken = false;

    ($scope.connexionToken) ? $state.transitionTo('home.overview') : $state.transitionTo('connexion');

});


app.controller('sectionHomeController', function ($scope, $state) {
    $state.transitionTo('home.overview');
});

app.controller('sectionConnexionController', function ($scope, $state) {

    $scope.connexionLogin = "";
    $scope.connexionPassword = "";

    $scope.connectionHome = function () {
        $scope.showLoader = true;
        $scope.connexionToken = true;
        $delay(50);
        $state.transitionTo('home.overview');

        //$("#containerConnexion").addClass('animated fadeOutDown').delay(1000).then($location.state('/home.overview'));
    };
});

app.controller('sectionOverviewController', function ($scope, $location) {
    $scope.showLoader = false;

});

app.controller('sectionDemandeController', function ($scope, $state) {

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

    $scope.saveDemande = function (d) {
        $scope.demandes.push({
                "id": $scope.demandes.length + 1,
                "libelle": d.libelle,
                "actif": d.actif
            }
        );
        toastr.success("Demande ajout&eacute;e");
    };

    $scope.editDemande = function (d) {
        $scope.demande.id = d.id;
        $scope.demande.libelle = d.libelle;
        (d.actif) ? $("select#selectEditActif").val("true") : $("select#selectEditActif").val("false")
    };

    $scope.editDemandeSave = function (d) {
        $scope.demandes[d.id - 1].libelle = d.libelle;
        $scope.demandes[d.id - 1].actif = d.actif;
    };

    $scope.deleteDemande = function (d) {
        bootbox.prompt("Confirmer l'ID de la demande &agrave; supprimer", function (result) {
            if (result) {
                if (result == d.id) {
                    $scope.demandes.splice($scope.demandes.indexOf(d.id), 1);
                    $scope.$apply();
                    toastr.success("Demande supprim&eacute;e");
                }
                else {
                    toastr.error("L'ID ne correspond pas");
                }
            }
        });
    };

});

app.controller('sectionFactureController', function ($scope, $state) {

});

app.controller('sectionRegulationController', function ($scope, $state) {

});

app.controller('sectionImpayeController', function ($scope, $state) {

});