'use strict';

eventsApp.filter('duration', function() {
    return function(duration) {
        switch(duration) {
            case 1:
                return 'half hour';
                break;
            case 2:
                return '1 hour';
                break;
            case 3:
                return 'half day';
                break;
            case 4:
                return 'full day';
        }
    }
})