/**
 * Created by JOCLAR on 25/08/2016.
 */
'use strict'

var app = angular.module('myApp', ['ui.router']);


app.config(
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/index");
        //
        // Now set up the states
        $stateProvider
            .state('index', {
                url: "/index",
                templateUrl: "partials/section-connexion.html",
                controller: 'sectionConnectionController'
            })
            .state('overview', {
                url: "/overview",
                templateUrl: "partials/section-overview.html",
                controller: 'sectionOverviewController'
            })
            .state('demande', {
                url: "/demande",
                templateUrl: "partials/section-demande.html"
            })
            .state('facture', {
                url: "/facture",
                templateUrl: "partials/section-facture.html"
            })
            .state('regulation', {
                url: "/fils1",
                templateUrl: "partials/section-facture.html"
            })
            .state('impaye', {
                url: "/impaye",
                templateUrl: "partials/section-impaye.html"
            });

    });