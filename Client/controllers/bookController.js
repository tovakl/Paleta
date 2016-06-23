function bookController($scope, $routeParams, $http)
{
    $scope.onLoad = onLoad;
    $scope.bookInfo = {};

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

}





