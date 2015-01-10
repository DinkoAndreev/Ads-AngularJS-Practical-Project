'use strict';

app.controller('HomeController',
    function($scope, addData, pageSize){
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

    })


