/**
 * Created by JOCLAR on 15/09/2016.
 */

angular.module('DemandeApp').controller('DemandeController', ['$scope', 'DemandeService', function ($scope, DemandeService) {
    $scope.Demandes = [];
    $scope.selectedDemande = {};

    $scope.loadDemandes = function () {
        DemandeService.fetchAll().success(function (data) {
            if (!data.error) {
                $scope.Demandes = data.data;
            } else {
                toastr.error(data.message, 'Data Error');
            }
        }).error(function (data) {
            toastr.error(data, 'Service Error');
        });
    }
    $scope.loadDemandes();

    $scope.addDemande = function (object) {
        DemandeService.save(object)
            .success(function (data) {
                if (!data.error) {
                    $scope.Demandes.push(data);
                } else {
                    toastr.error(data.message, 'Error');
                }
            }).error(function (data) {
                toastr.error(data, 'Error');
            });
    }

    $scope.deleteDemande = function (object) {
        DemandeService.delete(object).success(function (data) {
            if (!data.error) {
                $scope.Demandes.splice($scope.Demandes.indexOf(object), 1);
            } else {
                toastr.error(data.message, 'Error');
            }
        }).error(function (data) {
            toastr.error(data, 'Error');
        });
    }
    $scope.editDemande = function (object) {
        DemandeService.update(object).success(function (data) {
            if (data.error) {
                toastr.error(data.message, 'Error');
            } else {
                toastr.info(data.message, 'Information');
            }
        }).error(function (data) {
            toastr.error(data, 'Error');
        });
    }
}]);
