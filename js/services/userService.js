'use strict';

app.factory('userService',
    function ($resource, baseServiceUrl, authService) {
        var userService = $resource(
            baseServiceUrl + '/api/user/ads/:id',
            null,
            {
                'getUserAds': {
                    method:'GET',
                    headers: authService.getAuthHeaders()
                },
                'publishAd': {
                    method: 'POST',
                    headers: authService.getAuthHeaders()
                },
                'deactivateAd': {
                    method: 'PUT',
                    url: baseServiceUrl + "user/ads/deactivate/:id",
                    headers: authService.getAuthHeaders(),
                    params: { id: "@id" }
                },
                'updateAd': {
                    method: 'PUT',
                    headers: authService.getAuthHeaders(),
                    params: { id: "@id" }
                },
                'rePublishAd': {
                    method: 'PUT',
                    headers: authService.getAuthHeaders(),
                    params: { id: "@id" },
                    url: baseServiceUrl + "user/ads/republishad/:id"
                },
                'delete': {
                    method: 'DELETE',
                    headers: authService.getAuthHeaders(),
                    params: { id: "@id" }
                }

            }
        );

        return {
            getUserAds: function(params, success, error) {
                return userService.getUserAds(params, success, error);
            },
            publishAd: function(ad, success, error) {
                return userService.publishAd(ad, success, error);
            },
            deactivateAd: function(id, success, error) {
                return userService.deactivateAd({id: id}, success, error);
            },
            updateAd: function(ad, success, error) {
                return userService.deactivateAd(ad, success, error);
            },
            rePublishAd: function(ad, success, error) {
                return userService.deactivateAd(ad, success, error);
            },
            delete: function(ad, success, error) {
                return userService.deactivateAd(ad, success, error);
            }
        }
    }
);
