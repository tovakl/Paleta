function booksCatalogController($scope, $http){
    $scope.onLoad=onLoad;
    onLoad();

    function onLoad(){
        $http.get('/booksCatalog/loadBooks')
            .success(function(data){
                console.log(data);
        })
            .error(function(data){
                console.log("ERROR");
            });
    }


}
