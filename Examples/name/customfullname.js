var localapp = angular.module("myapp")

/* localapp.directive("firstName", implementFirstName)


function implementFirstName(){
    return{
        restrict:"CAE",
        template:"<h1>Prafful Daga is here</h1>"
    }
}
 */

 localapp.component("fullName", {
     templateUrl:"/name/showname.html",
     bindings:{fname:'@'},
     controller: function(){
         this.name = "Bala"
    }
 }
)


/* localapp.directive('firstName', function () {
    return {
        // Isolated scope binding
        scope: {
            message: '='
        },
        // Inline template which is binded to message variable in the component controller
        template: '<div>Hello {{$ctrl.message}}</div>',
        // The controller that handles our component logic
        controller: function () {
                this.message = "Thomas directive"
        },
        //defaults, automatically set when using .component()
        controllerAs: '$ctrl',
        bindToController: true
    };
}); */