(function () {
    var app = angular.module('InfiniteScrollWidgetApp', ['sfInfiniteScroll']);

    app.controller('InfiniteScrollWidgetCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

        $scope.isLoading = false;
        $scope.noMoreItems = false;

        $scope.items = [];
        $scope.allItems = [];

        $scope.pageSize = 5;

        var init = function () {
            var itemsCount = 25;
            for (var i = 1; i <= itemsCount; i++) {
                $scope.allItems.push({
                    title: "Item " + i,
                    content: "Item " + i + " content"
                });
            }

            $scope.items = $scope.allItems.slice(0, $scope.pageSize);
        };

        $scope.loadMoreItems = function () {

            if ($scope.noMoreItems) {
                return;
            }

            $scope.isLoading = true;

            // Uncomment this for actual usage
            /*var skip = $scope.items.length;
            var takeIndexEnd = skip + $scope.pageSize;
            var itemsToAdd = $scope.allItems.slice(skip, takeIndexEnd);

            if (itemsToAdd.length == 0) {
                $scope.noMoreItems = true;
            }

            $scope.items = $scope.items.concat(itemsToAdd);

            $scope.isLoading = false;*/

            // Timeout is used to delay the execution, so that the loading is visible
            $timeout(function () {
                var skip = $scope.items.length;
                var takeIndexEnd = skip + $scope.pageSize;
                var itemsToAdd = $scope.allItems.slice(skip, takeIndexEnd);

                if (itemsToAdd.length == 0) {
                    $scope.noMoreItems = true;
                }

                $scope.items = $scope.items.concat(itemsToAdd);

                $scope.isLoading = false;

            }, 1500);
        };

        // Initialize the controller
        init();
    }]);
}());