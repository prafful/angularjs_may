var localapp = angular.module("myapp")

localapp.directive("firstName", implementFirstName)


function implementFirstName(){

    return{
        restrict:"CAE",
        template:"<h1>Prafful Daga is here</h1>"
    }


}