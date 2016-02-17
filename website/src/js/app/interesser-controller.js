angular.module("RegistrerPaamelding")

.controller("Interesser", ['$scope', '$location', 'CacheService', function($scope, $location, CacheService) {
	$scope.person = CacheService.getPerson();

	$scope.send = function() {
		$location.path("/ferdig");
	}
}]);