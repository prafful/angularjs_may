localapp = angular.module("myapp")

localapp.controller("filtercontroller", function($scope){

    $scope.friends = [
        {
            "name":"prafful",
            "location":"chennai",
            "DOB":"25-12-1981"

        },
        {
            "name":"manoj",
            "location":"mumbai",
            "DOB":"25-12-1985"
        },
        {
            "name":"soni",
            "location":"bhopal",
            "DOB":"25-12-1986"
        },
        {
            "name":"mahi",
            "location":"kolaktta",
            "DOB":"25-12-1984"
        }
    ]

    $scope.sortBy = function(captured){
        console.log("i am clicked")
        $scope.sortbyme = captured

    }
})

localapp.filter("somecustomfilter", function(){
    
        //define the filter logic
        return function(input){
            console.log("received: " + input)
            var reverse = ""

            for(var a=0; a<input.length; a++){
                reverse = input.charAt(a) + reverse
            }

            return reverse

        }


})

