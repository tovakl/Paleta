function cartController($scope, $http) {

    $scope.books = {};
   // $scope.currentId = 0;
    $scope.onLoad = onLoad;
  //  $scope.addToCart = addToCart;
    onLoad();

    function onLoad() {
        $http.get('/cartView/loadCartView')
            .success(function (data) {
                $scope.books = data

                console.log("in load");
            })
            .error(function (data) {
                console.log("Error: " + data);
            });
    }
}