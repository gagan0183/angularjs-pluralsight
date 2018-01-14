eventsApp.controller('CacheController', function ($scope, $compile) {
    $scope.creating = function(html) {
        var compile = $compile(html);
        return compile($scope).appendTo(angular.element("#element"));
    }
});