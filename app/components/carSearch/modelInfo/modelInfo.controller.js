function ModelInfoController($scope,$stateParams, modelInfoService) {
    var brand = $stateParams.id;
    var model = $stateParams.model;
    var year = $stateParams.year;

    $scope.brand = brand;

    modelInfoService.getInfo(brand,model,year).then(function (response){
        $scope.carInformation = response.data;
    });

    
}

angular
  .module('modelInfo')
  .controller('ModelInfoController', ModelInfoController);
