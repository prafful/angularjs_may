var localapp = angular.module("myapp",['ui.router'])

localapp.config(function($stateProvider, $urlRouterProvider, $qProvider){
    
        $urlRouterProvider.otherwise('/home')
    
    //$qProvider.errorOnUnhandledRejections(false)

    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'a.html'
    }).state('about',{
        url:'/about',
        templateUrl:'b.html'
    }).state('default',{
        url:'',
        templateUrl:'a.html'
    })
})