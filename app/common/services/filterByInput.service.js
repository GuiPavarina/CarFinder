angular
    .module('carFinder')
    .factory('filterByInput', function () {
        var filterBrand = {
            input: '',
            placeholder: ''
        };
        return filterBrand;
    });
