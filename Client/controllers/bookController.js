function bookController($scope, $routeParams, $http)
{
    $scope.onLoad = onLoad;
    $scope.bookInfo = {};
    $scope.addToCart = addToCart;

    var bookId = ($routeParams.id || "");
    console.log("bookId: " + bookId);
    console.log("in the client side controller");
    onLoad();

    function onLoad()
    {
        $http.get('/booksInfo/loadBookInfo/'+bookId)
            .success(function (data) {
                $scope.bookInfo = data;
            })
            .error(function (data) {
                console.log("Error: "+data);

            })
    }

    function addToCart(id)
    {
        console.log("in add to cart "+ id);
        $http.get('booksCatalog/addBookToCart/'+id)
            .success(function (data) {
                alert(data.msg);
            })
            .error(function (data) {
                console.log("Error: "+data);
            });
    }

}





