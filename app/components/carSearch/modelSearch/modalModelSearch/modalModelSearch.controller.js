function ModalController($scope, $mdDialog, modelService) {
    
    var brand = $scope.brand;
    var code = $scope.code;

    modelService.getYears(brand, code).then(function (response) {
        $scope.years = response.data;
    });

    $scope.cancel = function () {
        $mdDialog.cancel('User clicked cancel');
    };
    
    $scope.ok = function () {
        if(!$scope.modelSelected)
            return;
        $mdDialog.hide($scope.modelSelected);
    };
      
}

angular
    .module('modelSearch')
    .controller('ModalController', ModalController);