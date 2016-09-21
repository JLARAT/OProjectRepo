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
        $state.transitionTo('home.overview');
    };
});

app.controller('sectionOverviewController', function ($scope, $location) {
    $scope.showLoader = false;

});

app.controller('sectionFactureController', function ($scope, $state) {
});

app.controller('sectionRegulationController', function ($scope, $state) {
});

app.controller('sectionImpayeController', function ($scope, $state) {
});