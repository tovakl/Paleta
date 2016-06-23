function booksCatalogController($scope, $http){

    $scope.books = {};
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

    function addToCart()
    {
        $http.get()
            .success(function (data) {

            })
            .error(function (data) {
               console.log("Error: "+data);
            });
    }
    
}
