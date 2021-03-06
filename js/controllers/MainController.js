var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {

	$scope.test = 'Can you see me NOW?!?!';

	$scope.postData = function() {
		var question = $scope.questionRequest;
		parseService.postQuestion(question)
			.then(function(serviceResponse){
				console.log(serviceResponse)
				$scope.getParseData();
			}, function(error) {
				console.log(error);
			})

	};


	$scope.getParseData = function(id) {
		parseService.getData(id)
			.then(function(response) {
				$scope.questions = response.data.results;
		})
	}
	$scope.getParseData();


	$scope.escalateQuery = function(text) {
		parseService.updateData(text.objectId)
			.then(function() {
				$scope.getParseData();
			})
	}


	$scope.deleteQuery = function(text) {
		parseService.deleteData(text.objectId)
			.then(function() {
				$scope.getParseData();
				
			})
	}

});