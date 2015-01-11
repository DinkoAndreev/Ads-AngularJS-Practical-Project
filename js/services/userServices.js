'use strict';

app.factory('UserServices',
    function ($resource, baseServiceUrl, authService) {
        var userServices = $resource(
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
                    url: baseUrl + "user/ads/deactivate/:id",
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
                    url: baseUrl + "user/ads/republishad/:id"
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
                return userServices.getUserAds(params, success, error);
            },
            publishAd: function(ad, success, error) {
                return userServices.publishAd(ad, success, error);
            },
            deactivateAd: function(id, success, error) {
                return userServices.deactivateAd({id: id}, success, error);
            },
            updateAd: function(ad, success, error) {
                return userServices.deactivateAd(ad, success, error);
            },
            rePublishAd: function(ad, success, error) {
                return userServices.deactivateAd(ad, success, error);
            },
            delete: function(ad, success, error) {
                return userServices.deactivateAd(ad, success, error);
            }
        }
    }
);
