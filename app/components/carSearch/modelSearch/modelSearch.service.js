angular
    .module('modelSearch')
    .factory('modelService', function ($http) {
        function getModels(id) {
            return $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas/' + id + '/modelos');
        }
        return {
            getModels: getModels
        };
    })