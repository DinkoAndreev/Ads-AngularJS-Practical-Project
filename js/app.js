'use strict';

var app = angular.module('SUAds', ['ngRoute','ngResourse', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

SUAds.config(function($routeProvider){
    $routeProvider
        .when('', {
            templateUrl: '',
            controller: ''
    })
        .otherwise({redirectTo: 'home'})
})
