angular
    .module('brandSearch')
    .factory('brandService', function ($http) {
        function getBrands() {
            return $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas');
        }
        return {
            getBrands: getBrands
        };
    })