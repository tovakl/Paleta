function booksCatalogController($scope, $http){

    $scope.books = {};
    $scope.onLoad=onLoad;
    onLoad();

    function onLoad(){
        $http.get('/booksCatalog/loadBooks')
            .success(function(data){
                $scope.books = data;
                console.log(data);
        })
            .error(function(data){
                console.log("ERROR");
            });
    }


}
