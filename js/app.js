'use strict';

var app = angular.module('SUAds', ['ngRoute','ngResourse']);

SUAds.config(function($routeProvider){
    $routeProvider
        .when('', {
            templateUrl: '',
            controller: ''
    })
        .otherwise({redirectTo: ''})
})
