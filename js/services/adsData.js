'use strict';

app.factory('AdsDataService',
    function($resource, baseUrl) {
        var adsResource = $resource(
            baseUrl + '/ads', null,
            {
                'getAll': {method:'GET'}
            }
        );
        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);

app.factory('categoriesDataService',
    function($resource, baseUrl) {
        var categoriesResource = $resource(
            baseUrl + '/categories'
        );

        return {
            getCategories: function(success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);

app.factory('townsDataService',
    function($resource, baseUrl) {
        var townsResource = $resource(
            baseUrl + '/towns'
        );

        return {
            getTowns: function(success, error) {
                return townsResource.query(success, error);
            }
        }
    }
);
