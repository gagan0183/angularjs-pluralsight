eventsApp.controller('EditEventController', function($scope) {
    $scope.saveEvent = function(event, newEventForm) {
        console.log(newEventForm);
        if(!newEventForm.$invalid) {
            alert(event.name);
        }   
    }
    $scope.cancelEvent = function() {
        window.location = '/EventDetails.html';
    }
});