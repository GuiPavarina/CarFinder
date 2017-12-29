angular
    .module('carSearch')
    .directive("scroll", function ($window) {
        return function (scope, element, attrs) {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 50) {
                    scope.filterButton = true;
                } else {
                    scope.filterButton = false;
                }
                scope.$apply();
            });
        };
    });