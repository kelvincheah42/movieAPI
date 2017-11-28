var MovieApi=angular.module('MovieSearch',['ngRoute,ngResource']);
MovieApi.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/home', {
            templateUrl : 'home.html',
            controller  : 'MovieApiControl'
        })

        // route for the actor page
        .when('/actor', {
            templateUrl : 'actor.html',
            controller  : 'searchCtrl'
        })
        .otherwise({
            redirectTo: 'home'
        })
});