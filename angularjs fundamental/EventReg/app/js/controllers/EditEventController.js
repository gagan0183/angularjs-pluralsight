eventsApp.controller('EditEventController', function($scope, eventData) {
    $scope.saveEvent = function(event, newEventForm) {
        console.log(newEventForm);
        if(!newEventForm.$invalid) {
            eventData.save(event)
                .then(function(response) {
                    console.log('success', response);
                },
                function(response) {
                    console.log('failure', response);
                });
        }   
    }
    $scope.cancelEvent = function() {
        window.location = '/EventDetails.html';
    }
});