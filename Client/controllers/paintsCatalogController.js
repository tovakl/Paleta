function paintsCatalogController($scope, $routeParams, $http) {


    $scope.onLoad=onLoad;
    $scope.title={};
    $scope.session = {};


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

            })
            .error(function(data){
                console.log("Error: "+data);
            });
    }

}

