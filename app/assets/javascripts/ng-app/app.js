// Create angular module "nachApp" and pass in ui.router and templates (injecting extra angular dependencies)
var app = angular.module('nachApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            template: '<h1>Test</h1>'
        })
        .state('links', {
            url: '/links',
            template: '<h1>Another Test</h1>'
        })


});