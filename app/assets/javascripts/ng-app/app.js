// Create angular module "nachApp" and pass in ui.router and templates (injecting extra angular dependencies)
var app = angular.module('nachApp', ['ui.router', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('links', {
            url: '/links',
            template: '<h1>Another Test</h1>'
        })


}]);