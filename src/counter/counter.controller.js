const waCounterController = function ($scope) {

    $scope.count = 0;

    $scope.increment = function() {
        $scope.count = $scope.count + 1;
    }

    $scope.decrement = function() {
        $scope.count = $scope.count - 1;
    }

}

export default waCounterController;