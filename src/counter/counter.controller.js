const waCounterController = function ($scope, $window) {
    "ngInject"

    $scope.count = 0;

    $scope.increment = function() {
        $scope.count = $scope.count + 1;
        jQuery('body').css('background-color', 'yellow');
    }

    $scope.decrement = function() {
        $scope.count = $scope.count - 1;
    }

}

export default waCounterController;