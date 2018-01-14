eventsApp.controller('LocaleController', function($scope, $locale) {
    $scope.currentDate = Date.now();
    $scope.p = $locale.DATETIME_FORMATS.fullDate;
});