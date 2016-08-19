function tasteController($scope, $routeParams, $http){

    $scope.onLoad=onLoad;
    $scope.taste = {};
    var bookId = ($routeParams.id || "");
    onLoad();

    function onLoad()
    {

        $http.get('/taste/loadTasteById/'+bookId)
            .success(function(data){
                $scope.taste = data;
            })
            .error(function(data){
                console.log("ERROR");
            });
    }

}

