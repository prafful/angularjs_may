localapp = angular.module("myapp")

localapp.controller("serviceController", function($scope, MathsService){
    //i want to inject service inside this controller. This
    //controller will take help of service to do calculate something

    $scope.square = function(){
        console.log(" function called")
        console.log(MathsService.testVariable)
        $scope.result = MathsService.squareMe($scope.num1)
    }

    $scope.getRemoteData = function(){
        console.log(" getting remote data")
        $scope.remoteData = MathsService.getRemoteData()
        console.log("From HTTP service call:")
        $scope.remoteData.then(function(res){
            console.log(res)
            $scope.jsondata = res;
        })
    }
})