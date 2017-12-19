eventsApp.controller('EventController', function($scope) {
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '9:00am',
        location: {
            name: 'Google headquarters',
            city: 'Mount view',
            state: 'CA'
        },
        imgUrl: '/img/angularjs-logo.png'
    }
}); 