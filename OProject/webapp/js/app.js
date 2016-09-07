/**
 * Created by JOCLAR on 25/08/2016.
 */
'use strict'

var app = angular.module('myApp', ['ui.router']);


app.config(
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/index");

        $stateProvider
            .state('index', {
                url: "/index",
                templateUrl: "partials/section-overview.html",
                controller: 'sectionConnectionController'
            })
            .state('overview', {
                url: "/overview",
                templateUrl: "partials/section-overview.html",
                controller: 'sectionConnectionController'
            })
            .state('demande', {
                url: "/demande",
                templateUrl: "partials/section-demande.html",
                controller: 'sectionDemandeController'
            })
            .state('facture', {
                url: "/facture",
                templateUrl: "partials/section-facture.html"
            })
            .state('regulation', {
                url: "/regulation",
                templateUrl: "partials/section-regulation.html"
            })
            .state('impaye', {
                url: "/impaye",
                templateUrl: "partials/section-impaye.html"
            })
    });