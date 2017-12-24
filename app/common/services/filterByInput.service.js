angular
    .module('brandFilter', [])
    .factory('filterByInput', function() {
        var filterBrand = {
            input: ''
        };
        return filterBrand;
    });
