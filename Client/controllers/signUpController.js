function signUpController($scope,$routeParams, $http)
{
    $scope.user = {};

    $scope.newUser = function(user) {

        if ($scope.upForm.$valid) {

            $scope.user = angular.copy(user);

            $http.post('/userManage/signUp', $scope.user)
                .success(function (res) {

                    if (res.success == true) {
                        alert(res.msg);

                        $scope.user = res.user;
                        document.getElementById("name").textContent = $scope.user.userName + " | ";


                        window.location.replace('#/home');
                    }
                    else {
                        alert(res.msg);
                    }

                })
                .error(function (error) {
                    console.log('Error: ' + error);

                });
        }
    }


}
