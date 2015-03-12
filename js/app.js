var imdbapp = angular.module('imdbapp', [
  'ngRoute',
  'imdbappcontrollers'
]);

imdbapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movie', {
        templateUrl: 'partials/list.html',
        controller: 'ListView'
      }).
      when('/movie/:rank', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsView'
      }).
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryView'
      }).
      otherwise({
        redirectTo: '/movie'
      });
  }]);