function booksCatalogController($scope, $http){

    $scope.books = {};
    $scope.currentId=0;
    $scope.onLoad=onLoad;
    $scope.addToCart = addToCart;
    onLoad();

    function onLoad(){
        $http.get('/booksCatalog/loadBooks')
            .success(function(data){
                $scope.books = data
        })
            .error(function(data){
                console.log("Error: "+data);
            });
    }

    function addToCart(id)
    {
        console.log("in add to cart "+ id);
        $http.get('booksCatalog/addBookToCart/'+id)
            .success(function (data) {

            })
            .error(function (data) {
               console.log("Error: "+data);
            });
    }
    
}
