angular.module("RegistrerPaamelding")

.controller("Informasjon", ['$scope', '$location', 'CacheService', function($scope, $location, CacheService) {
	$scope.person = CacheService.getPerson();

	$scope.neste = function() {
		CacheService.setPerson($scope.person);
		$location.path("/interesser");
	}
}]);