function ModelController($mdDialog, $scope, $stateParams, $state, modelService, filterByInput) {

    $scope.filter = filterByInput;

    $scope.init = function () {
        filterByInput.input = "";
        filterByInput.placeholder = "Filter By Model"
    };

    var id = $stateParams.id;
    modelService.getModels(id).then(function (response) {
        $scope.models = response.data.modelos;
    });

    $scope.openDialog = function (code) {
        $scope.code = code;
        $scope.brand = id;
        $mdDialog.show({
            templateUrl: 'app/components/carSearch/modelSearch/modalModelSearch/modalModelSearch.template.html',
            scope: $scope,
            bindToController: true,
            preserveScope: true,
            clickOutsideToClose: false
        }).then(function (result) {
                
                $state.go('modelInfo',{
                    id: $scope.brand,
                    model: $scope.code,
                    year: result
                })
            }, function (err) {
                
        });;
    };

}

angular
    .module('modelSearch')
    .controller('ModelController', ModelController);
