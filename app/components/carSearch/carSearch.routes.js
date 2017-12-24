angular
    .module('carSearch',
        ['ui.router','brandSearch','modelSearch']
    )
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
    }]);