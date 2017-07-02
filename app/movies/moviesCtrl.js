app.controller('MoviesCtrl', ['$scope', 'moviesModel', function($scope, moviesModel) {
  $scope.isDeleting = false;

  $scope.movies = moviesModel.getMovies();

  $scope.addMovie = function() {
    alert("This functionality will be available soon!");
  };

  $scope.toggleDeleteMode = function() {
    $scope.isDeleting = !$scope.isDeleting;
  };

  $scope.deleteMovie = function() {
    // TODO: delete the movie only if the app is in "delete mode"
  };
}]);
