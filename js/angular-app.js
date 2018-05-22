/*
ruedasysuspensiones.com
Copyright (c) 2015 Ruedas y Suspensiones de Venezuela, C.A.

Developed by Luis E. Arriojas for Ruedas y Suspensiones de Venezuela, C.A.
***************** LinkedIn *****************
* https://www.linkedin.com/in/luisarriojas *
********************************************
*/

'use strict';

var rysApp = angular.module('rysApp', ['ngRoute', 'rysControllers', 'rysServices']);

/* router */
rysApp.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    }).
    when('/contactenos', {
        templateUrl: 'templates/contactenos.html',
        controller: 'contactenosCtrl'
    }).
    when('/formasDePago', {
        templateUrl: 'templates/formasDePago.html',
        controller: 'formasDePagoCtrl'
    }).
    when('/promo/grandCherokee/:referrer', {
        templateUrl: 'templates/promo.html',
        controller: 'promoCtrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);

/* fix to crawlers */
rysApp.config(['$locationProvider',
function ($locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
}]);

/* services */
var rysServices = angular.module('rysServices', []);

rysServices.factory('Meta', [

    function () {
        return {
            tags: {
                description: '',
                title: ''
            }
        }
    }
]);
