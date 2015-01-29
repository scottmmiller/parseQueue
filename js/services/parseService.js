var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {
	

	this.postQuestion = function(question) {
		var deferred = $q.defer();

		$http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/questions',
			data: {
				question: question
			}
		})
		deferred.resolve(question);
		return deferred.promise;
	};
});