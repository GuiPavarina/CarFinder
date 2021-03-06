angular
    .module('carSearch')
    .config(['$stateProvider', '$urlRouterProvider', 
        function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise("/brand")
                
            $stateProvider
                .state('brandSearch', {
                    url: "/brand",
                    component: 'brandSearch'
                })
                .state('modelSearch', {
                    url: "/brand/{id}",
                    component: 'modelSearch'
                })
                .state('modelInfo', {
                    url: "/brand/{id}/model/{model}/year/{year}",
                    component: 'modelInfo'
                })
    }]);