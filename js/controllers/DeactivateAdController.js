//TODO
//app.controller('DeactivateAdController',
//    function ($scope, adsResource, userService, authService, notifyService) {
//
//        $scope.currentAdId = $routeParams.id;
//
//        if ($scope.currentAdId) {
//            adsResource.getUserAds({ id: $scope.currentAdId },
//                function (data) {
//                    $scope.editAd = data;
//                });
//        }
//
//        $scope.adDeactivation = function (id) {
//            userService.deactivateAd(id,
//                function success(data) {
//                    notifyService.showInfo("Advertisement deactivated");
//                    $location.path("/user/ads");
//                },
//                function error(err) {
//                    notifyService.showError("Error");
//                }
//            );
//        };
//    }
//);
