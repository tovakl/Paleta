function booksCatalogController($scope, $http){

    $scope.books = {};
    $scope.currentId=0;
    $scope.title={};
    $scope.session = {};
    $scope.onLoad=onLoad;
    $scope.addToCart = addToCart;
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

                $http.get('/booksCatalog/loadBooks')
                    .success(function(data){
                        $scope.books = data;
                        console.log("Succeed loading");
                    })
                    .error(function(data){
                        console.log("Error: "+data);
                    });

            })
            .error(function(data){
                console.log("Error: "+data);
            });
    }

    function addToCart(id)
    {
        console.log("in add to cart "+ id);
        $http.get('/booksCatalog/addBookToCart/'+id)
            .success(function (data) {
                console.log(data);
                alert(data.msg);
            })
            .error(function (data) {
               console.log("Error: "+data);
            });
    }
    
}
