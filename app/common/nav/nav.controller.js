function NavController($rootScope, $scope,filterByInput) {
    $scope.filter = filterByInput;
    
}

angular
    .module('navBar')
    .controller('NavController', NavController);