function readingTastingController($scope, $http)
{

    $scope.tastingBooks = {};
    $scope.onLoad=onLoad;
    onLoad();

    function onLoad(){
        $http.get('/readingTasting/loadBooksForTaste')
            .success(function(data){
                $scope.tastingBooks = data;
                console.log("Tasting data "+data);
            })
            .error(function(data){
                console.log("ERROR IN GETTING DATA OF TASTING.");
            });
    }


}
