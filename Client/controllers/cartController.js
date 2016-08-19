function cartController($scope, $routeParams, $http) {

    $scope.books = {};
   // $scope.currentId = 0;
    $scope.onLoad = onLoad;
    $scope.addSameBookToCart = addSameBookToCart;
    $scope.reduceSameBook = reduceSameBook;
    onLoad();

    function onLoad() {
        $http.get('/cartView/loadCartView')
            .success(function (data) {
                $scope.books = data.cart;

                console.log("in load");

                if(data.in == false)
                {
                    alert(data.msg);
                    window.location.replace('#/home');
                }

            })
            .error(function (data) {
                console.log("Error: " + data);
            });
    }

    function addSameBookToCart(id) {

        console.log("in add same");

        $http.get('/cartView/addSameBookToCart/'+id)
            .success(function (data) {
                alert(data.msg);
                window.location.reload();

            })
            .error(function (data) {
                console.log("Error: on add same to cart");

            });

    }

    function reduceSameBook(id) {
        $http.get('/cartView/reduceSameBook/'+id)
            .success(function (data) {
                alert(data.msg);
                window.location.reload();
            })
            .error(function (data) {
                console.log("Error: on add same to cart");

            });

    }
}