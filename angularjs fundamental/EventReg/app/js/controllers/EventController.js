eventsApp.controller('EventController', function($scope, eventData) {
    $scope.sortOrder = 'name';
    eventData.getEvent(function(data) {
        $scope.event = data;
    });
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }
}); 