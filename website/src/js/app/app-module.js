angular.module("RegistrerPaamelding", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl: "src/templates/informasjon.html",
			controller: "Informasjon"
		}).
		when("/interesser", {
			templateUrl: "src/templates/interesser.html",
			controller: "Interesser"
		}).
		when("/ferdig", {
			templateUrl: "src/templates/ferdig.html",
			controller: "Ferdig"
		}).
		otherwise({
			redirectTo: "/"
		});
}]);