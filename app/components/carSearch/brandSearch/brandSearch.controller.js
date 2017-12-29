function CarController($rootScope, $scope, $state, $window, brandService, filterByInput) {

    $scope.filter = filterByInput;

    $scope.init = function () {
        filterByInput.input = "";
        filterByInput.placeholder = "Filter By Brand";
    };

    $scope.goToTop = function () {
        $window.scrollTo(0,0);
    }

    brandService.getBrands().then(function (response) {
        $scope.brandNames = response.data;
        elements();
    },function (err){
        $scope.error = true;
    });

    function elements() {
        var arr = [];

        for (var i = 0; i < $scope.brandNames.length; i++) {
            var nameFormated = $scope.brandNames[i].nome.replace(/\s/g, '').toLowerCase();
            nameFormated = "https://logo.clearbit.com/" + nameFormated + ".com";
            // console.log(escape(nameFormated))
            // nameFormated = 'app/assets/logos/' + escape(nameFormated) + '.png';
            arr.push({
                name: $scope.brandNames[i].nome,
                code: $scope.brandNames[i].codigo,
                img: nameFormated
            })
        }

        $scope.brands = arr;
    }

}

angular
    .module('brandSearch')
    .controller('CarController', CarController);
