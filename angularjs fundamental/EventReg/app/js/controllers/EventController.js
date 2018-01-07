eventsApp.controller('EventController', function($scope, eventData, $log) {
    $scope.sortOrder = 'name';
    eventData.getEvent().then(function(event) {
        $scope.event =  event;
    },
    function(response) {
        console.log(response);
    });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }
}); 