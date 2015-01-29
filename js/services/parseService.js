var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {
	

	this.postQuestion = function(userQuestion) {
		var deferred = $q.defer();
		console.log(userQuestion)
		$http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/questions',
			data: {
				question: userQuestion, 
				status: 'red',
			}
		}).then(function(httpResponse) {
			deferred.resolve(httpResponse);
		}, function(error) {
			deferred.reject(error);
		});
		return deferred.promise;
	};

	this.getData = function(id) {
		if(!id) {
			return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/questions'
			})
		} else {
			return $http({
				method: 'GET',
				url: 'https://api.parse.com/1/classes/questions/' + id
			})
		}
	}

	this.updateData = function(id) {
		
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/questions' + id,
			data: {
				question: userQuestion,
				id: objectId,
				status: 'red'
			}
		})
	}



});