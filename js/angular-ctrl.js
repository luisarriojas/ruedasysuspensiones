/*
ruedasysuspensiones.com
Copyright (c) 2015 Ruedas y Suspensiones de Venezuela, C.A.

Developed by Luis E. Arriojas for Ruedas y Suspensiones de Venezuela, C.A.
***************** LinkedIn *****************
* https://www.linkedin.com/in/luisarriojas *
********************************************
*/

'use strict';

var rysControllers = angular.module('rysControllers', []);

rysControllers.controller('rysCtrl', ['$scope', 'Meta',
function ($scope, Meta) {
    $scope.rysMeta = Meta.tags;
}]);

rysControllers.controller('homeCtrl', ['$scope', 'Meta',
function ($scope, Meta) {
    $scope.rysMeta = Meta.tags;
    $scope.rysMeta.description = "";
    $scope.rysMeta.title = "Home";

    $scope.promo="img/home/promoGrandCherokee/grandCherokee-" + Math.ceil(Math.random()*4) + ".jpg";
}]);

rysControllers.controller('contactenosCtrl', ['$scope', 'Meta', '$http',
function ($scope, Meta, $http) {
    $scope.rysMeta = Meta.tags;
    $scope.rysMeta.description = "";
    $scope.rysMeta.title = "Contactenos";

    $scope.quote = {
        name: '',
        email: '',
        phone: '',
        brand: '',
        model: '',
        year: '',
        additionalInfo: '',
        result: {
            show: false,
            text: ''
        }
    };

    $scope.sendQuote = function(){
        $http({
            method: "POST",
            url: "scripts/sendQuote.php"
        }).success(function(data) {
            $scope.quote = data;
        });
    };

    /*
    $scope.submit=function(){
    if ($scope.form.name.length > 0 && $scope.form.email.length > 0 && $scope.form.phone.length > 0 && $scope.form.comment.length > 0){
    $http({
    method: "POST",
    url: "scripts/contact.php",
    data: {
    name: $scope.form.name,
    email: $scope.form.email,
    phone: $scope.form.phone,
    comment: $scope.form.comment
    }
    }).success(function(data) {
    $scope.form={
    name: '',
    email: '',
    phone: '',
    comment: '',
    result: {
    show: true,
    text: 'Gracias. Su comentario ha sido enviado satisfactoriamente.'
    }
    };
    });
    }else{
    $scope.form.result.show = true;
    $scope.form.result.text = 'Debe escribir su nombre, email, teléfono y su comentario.'
    }
    };
    */
}]);

rysControllers.controller('formasDePagoCtrl', ['$scope', 'Meta',
function ($scope, Meta) {
    $scope.rysMeta = Meta.tags;
    $scope.rysMeta.description = "";
    $scope.rysMeta.title = "Formas de pago";
}]);

rysControllers.controller('promoCtrl', ['$scope', 'Meta', '$http', '$routeParams',
function ($scope, Meta, $http, $routeParams) {
    $scope.rysMeta = Meta.tags;
    $scope.rysMeta.description = "";
    $scope.rysMeta.title = "Promoción";

    $scope.promo = {
        customerId: '',
        name: '',
        email: '',
        phone: '',
        vehicle: 'Grand Cherokee WK',
        year: '',
        plate: '',
        result: ''
    };

    $scope.sendPromo = function(){
        if ($scope.promo.customerId.length > 0 && $scope.promo.name.length > 0 && $scope.promo.email.length > 0 && $scope.promo.phone.length > 0 && $scope.promo.vehicle.length > 0 && $scope.promo.year.length > 0 && $scope.promo.plate.length > 0){
            $http({
                method: "POST",
                url: "scripts/promo.php",
                data: {
                    customerId: $scope.promo.customerId.toUpperCase(),
                    name: $scope.promo.name.toUpperCase(),
                    email: $scope.promo.email.toUpperCase(),
                    phone: $scope.promo.phone.toUpperCase(),
                    vehicle: $scope.promo.vehicle.toUpperCase(),
                    year: $scope.promo.year.toUpperCase(),
                    plate: $scope.promo.plate.toUpperCase(),
                    referrer: $routeParams.referrer.toUpperCase()
                }
            }).success(function(data) {
                if (data.result=='error'){
                    $scope.promo.result="error";
                }else if(data.result=='success'){
                    $scope.promo = {
                        customerId: '',
                        name: '',
                        email: '',
                        phone: '',
                        vehicle: 'Grand Cherokee WK',
                        year: '',
                        plate: '',
                        result: 'success'
                    };
                }
            }).error(function(data) {
                $scope.promo.result="error";
            });
        }else{
            $scope.promo.result = 'data';
        }
    };
}]);
