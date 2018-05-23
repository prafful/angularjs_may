var localapp = angular.module("myapp")
        localapp.controller("mycontroller", implementController)
        
        //this is implementation of controller
        function implementController($scope){
            $scope.fname = "Partha"
            $scope.lname= "Reddy"

            $scope.team = ['praffuldaga','mohan',"partha"]
            $scope.profession = ['programmer', 'singer', 'trainer']

            $scope.addToTeam = function(){
                console.log("addtoteam function called")
                //$scope.team.push($scope.fname)
                $scope.team.unshift($scope.fname)
                $scope.fname=""
            }

            $scope.deleteLi = function(currentCounter){
                console.log("deleting the li at position: " + currentCounter)
                $scope.team.splice(currentCounter,1)
            }

        }