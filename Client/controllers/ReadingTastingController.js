function readingTastingController($scope, $http)
{

    $scope.tastingBooks = {};
    $scope.onLoad=onLoad;
    onLoad();

    function onLoad(){
        var text;
        var signed;
        console.log("in on load");

        $http.post('/userManage/getSessionInfo')
            .success(function(data){
                signed = data.signed;
                $scope.session = data.session;

                if(signed)
                {
                    document.getElementById("name").textContent = $scope.session.user.userName+" | ";

                }

                $http.get('/readingTasting/loadBooksForTaste')
                    .success(function(data){
                        $scope.tastingBooks = data;
                        console.log("Tasting data "+data);
                    })
                    .error(function(data){
                        console.log("ERROR IN GETTING DATA OF TASTING.");
                    });

            })
            .error(function(data){
                console.log("Error: "+data);
            });
    }

}
