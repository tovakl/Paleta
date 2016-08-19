function homeController($scope, $routeParams, $http) {


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

                // if(signed == false)
                // {
                //     console.log("no");
                //     text = '';
                //     $scope.title = text;
                // }
                // else
                // {
                //     console.log("yes");
                //     text= '';
                //     text="!"+$scope.session.user.userName+"שלום ";
                //     $scope.title = text;
                // }
            })
            .error(function(data){
                console.log("Error: "+data);
            });
    }

}

