
var imdbappcontrollers = angular.module('imdbappcontrollers', []);

imdbappcontrollers.controller('ListView', function($scope, $http) {
	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movies = data;
		$scope.sorting = 'title';
		//$scope.reverse = false;
	});
});

imdbappcontrollers.controller('DetailsView', function($scope,$routeParams,$http) {
	$scope.rank = $routeParams.rank;
	$scope.rankint = parseInt($scope.rank);
	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movies = data;
		
	});

});

imdbappcontrollers.controller('GalleryView', function($scope, $http) {
	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movies = data;
	});

});




 