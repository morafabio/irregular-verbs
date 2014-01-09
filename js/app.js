var app = angular.module('BaseApp', ['BaseFilters']);



function GameCtrl($scope, $http) {

    $scope.limit = 10;
    $scope.verbs = [];
    $scope.showResults = false;
    $scope.statusText = "Fill the table.";

    $scope.check = function(element) {
        $scope.showResults = true;
        var correct = 0;
        $scope.verbs.forEach(function(verb)
        {
            if(verb.past == verb.answer_past && verb.participle == verb.answer_participle) {
                correct++;
            }
        });
        $scope.statusText = correct + ' of ' + $scope.limit + '.';
    };

    $scope.start = function(element) {
        var httpRequest = $http({
            method: 'POST',
            url: 'data/source.json'
        }).success(function(data, status) {
            data = angular.fromJson(data);
            data = shuffleArray(data);
            $scope.verbs = angular.fromJson(data);
        });
    }

    var shuffleArray = function(array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    $scope.start();
}
