'use strict';

app.factory('profileService',
    function ($resource, baseServiceUrl, authService) {
        var profileService = $resource(
            baseServiceUrl + '/api/user/profile',
            null,
            {
                "profile": {
                    method: "GET",
                    headers: authService.getAuthHeaders()
                },
                "edit": {
                    method: "PUT",
                    headers: authService.getAuthHeaders()
                },
                "changePassword": {
                    method: "PUT",
                    url: baseServiceUrl + "user/changePassword",
                    headers: authService.getAuthHeaders()
                }
            }
        );
        return {
            profile: function (success, error) {
                return profileService.profile(success, error);
            },
            edit: function (profile, success, error) {
                return profileService.edit(profile, success, error);
            },
            changePassword: function (passwordData, success, error) {
                return profileService.changePassword(passwordData, success, error);
            }
        }
    }
);
