'use strict';

app.controller('ProfileEditController',
    function($scope, townsService, profileService, notifyService){
        $scope.towns = townsService.getTowns();
        $scope.userData = profileService.profile();

        $scope.updateProfile = function () {
            profileService.edit($scope.userData, function (data) {
                notifyService.showInfo("User profile successfully updated.");
            }, function (error) {
                notifyService.showError("Error");
            });
        };

        $scope.editPassword = function () {
            profileService.changePassword($scope.userData, function (data) {
                notifyService.showInfo("User password successfully updated.");
            }, function (error) {
                notifyService.showError("Error");
            });
        }
    }
);
