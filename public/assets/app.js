var app = angular.module("app", ['ngRoute']);
app.config( function ($routeProvider, $locationProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl: 'assets/partials/main.html',
    controller: 'reloadController'
   })
  .when('/menu', {
    templateUrl: 'assets/partials/menu.html',
    controller:  'reloadController'
  })
   .when('/gallery', {
    templateUrl: 'assets/partials/gallery.html',
    controller:  'reloadController'
  })
    .when('/about', {
    templateUrl: 'assets/partials/about.html',
    controller:  'reloadController'
  })
    .when('/contact', {
    templateUrl: 'assets/partials/contact.html',
    controller:  'mainController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
