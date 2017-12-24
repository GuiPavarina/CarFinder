function ModelController($scope,$stateParams,modelService,filterByInput) {

    $scope.filter = filterByInput;
    
    var id = $stateParams.id;
    modelService.getModels(id).then(function (response){
        $scope.models = response.data.modelos;
    });

}

angular
    .module('modelSearch')
    .controller('ModelController', ModelController);
