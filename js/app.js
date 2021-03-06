'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserAdsController'
    });
    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-ad.html',
        controller: 'PublishAdController'
    });
    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-user-profile.html',
        controller: 'ProfileEditController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});
