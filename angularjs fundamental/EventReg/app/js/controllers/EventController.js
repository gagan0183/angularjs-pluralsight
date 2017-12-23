eventsApp.controller('EventController', function($scope, eventData, $log) {
    $scope.sortOrder = 'name';
    eventData.getEvent()
            .success(function(event) {
                $scope.event = event;
            })
            .error(function(data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }
}); 