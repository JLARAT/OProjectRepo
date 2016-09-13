/**
 * Created by JOCLAR on 25/08/2016.
 */
'use strict'

var app = angular.module('myApp', ['ui.router']);


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
                templateUrl: "partials/home.html",
                controller: 'sectionHomeController'
            })
            .state('home.overview', {
                url: "/overview",
                templateUrl: "partials/section-overview.html",
                controller: 'sectionOverviewController'
            })
            .state('home.demande', {
                url: "/demande",
                templateUrl: "partials/section-demande.html",
                controller: 'sectionDemandeController'
            })
            .state('home.facture', {
                url: "/facture",
                templateUrl: "partials/section-facture.html"
            })
            .state('home.regulation', {
                url: "/regulation",
                templateUrl: "partials/section-regulation.html"
            })
            .state('home.impaye', {
                url: "/impaye",
                templateUrl: "partials/section-impaye.html"
            })
    });