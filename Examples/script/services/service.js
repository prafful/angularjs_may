var localapp = angular.module("myapp")

localapp.service('MathsService', function($http){

    var mathsvar = {}
    mathsvar.testVariable = 31;
    mathsvar.name = {
                        'age':10
                    }
    mathsvar.squareMe = function(num){
        return num*num
    }

    mathsvar.getRemoteData = function(){
        return $http.get("https://jsonplaceholder.typicode.com/users")
                    .then(function(response){
                      
                            console.log("Inside http.get.then")
                            console.log(response.data)
                            return response.data;
                      
                    }, function(error){
                            console.log(error)
                            return error.status;
                    })
    }


    return mathsvar;
    //return mathsvar;


})

