angular
    .module('modelInfo')
    .factory('modelInfoService', function ($http) {
        function getInfo(brand, model, year) {
            return $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas/' + brand + '/modelos/' + model + '/anos/' + year);
        }
        return {
            getInfo: getInfo
        };
    })