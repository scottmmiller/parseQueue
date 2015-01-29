var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {
	

	this.postQuestion = function(userQuestion) {
		var deferred = $q.defer();

		$http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/questions',
			data: {
				question: userQuestion
			}
		}).then(function(httpResponse) {
			deferred.resolve(httpResponse);
		}, function(error) {
			deferred.reject(error);
		});
		return deferred.promise;
	};
});