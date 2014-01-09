angular.module('BaseFilters', [])
.filter('check', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
})
;
