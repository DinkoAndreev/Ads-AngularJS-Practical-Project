'use strict';
app.controller('PublishAdController',
    function($scope, $location, categoriesService,
         townsService, userService, notifyService){
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townService.getTowns();

        $scope.createNewAd = function(adData) {
            userService.publishAd(adData,
            function success() {
                notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                $location.path("/user/ads");
            },
                function error(err){
                    notyfiService.showError();
                }
            );
        };
        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

    }
);
