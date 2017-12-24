function CarController($scope,$state,brandService,filterByInput) {

    // filterByInput = "";
    $scope.filter = filterByInput;

    brandService.getBrands().then(function (response){
        $scope.brandNames = response.data;
        elements();
    });

    function elements(){
        var arr = [];

        for(var i = 0; i < $scope.brandNames.length ; i++){
            var nameFormated = $scope.brandNames[i].nome.replace(/\s/g,'');
            nameFormated = "https://logo.clearbit.com/" + nameFormated + ".com";
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
