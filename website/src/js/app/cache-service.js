angular.module("RegistrerPaamelding")

.factory('CacheService', function() {
	var obj = {};

	obj.setPerson = function(person) {
		this.person = person;
	}

	obj.getPerson = function() {
		return this.person;
	}

	obj.setInterest = function(interest) {
		this.interest = interest;
	}

	obj.getInterest = function() {
		return this.interest;
	}

	return obj;
});