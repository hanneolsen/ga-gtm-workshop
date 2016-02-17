angular.module("RegistrerPaamelding")

.controller("Ferdig", ['$scope', '$location', 'CacheService', function($scope, $location, CacheService) {
	$scope.person = CacheService.getPerson();

	$scope.lukk = function() {
		$location.path("/");
	}
}]);