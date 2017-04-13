var app = angular.module('portMod', ['ngRoute']);


//routing to different views
app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/about', {
    controller: 'portController',
    templateUrl: 'views/about.html'
  })
  .when('/resume', {
    controller: 'portController',
    templateUrl: 'views/resume.html'
  })
  .when('/projects', {
    controller: 'portController',
    templateUrl: 'views/projects.html'
  })
  .when('/contact', {
    controller: 'portController',
    templateUrl: 'views/contact.html'
  })
  .when('/', {
    controller: 'portController',
    templateUrl: 'views/landing.html'
  });

$locationProvider.hashPrefix('');
});
