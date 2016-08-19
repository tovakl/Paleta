function indexController($scope, $routeParams, $http)
{

    $scope.signOut = function() {

                $http.post('/userManage/signOut')
                    .success(function (res) {
                        if (res.out = true) {
                            
                            window.location.reload();
                            window.location.replace('#/home');
                        }
                    })
                    .error(function (error) {
                        console.log('Error: ' + error);

                    });
            }

}
