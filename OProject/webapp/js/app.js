/**
 * Created by JOCLAR on 25/08/2016.
 */
'use strict'

var app = angular.module('myApp', ['ui.router', 'DemandeApp']);


app.config(
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/index");

        $stateProvider
            .state('connexion', {
                url: "/connexion",
                templateUrl: "partials/connexion.html",
                controller: 'sectionConnexionController'
            })
            .state('home', {
                url: "/home",
                abstract:true,
                templateUrl: "partials/home.html",
                controller: 'sectionHomeController'
            })
            .state('home.overview', {
                url: "/overview",
                templateUrl: "partials/section-overview.html",
                controller: 'sectionOverviewController'
            })
            .state('home.demande', {
                url: "/Demande",
                templateUrl: "partials/section-demande.html",
                controller: 'DemandeController'
            })
            .state('home.facture', {
                url: "/Facture",
                templateUrl: "partials/section-facture.html"
            })
            .state('home.regulation', {
                url: "/Fegulation",
                templateUrl: "partials/section-regulation.html"
            })
            .state('home.impaye', {
                url: "/Impaye",
                templateUrl: "partials/section-impaye.html"
            })
    });