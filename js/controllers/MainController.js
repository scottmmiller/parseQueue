var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {

	$scope.test = 'Can you see me NOW?!?!';

	$scope.postData = function() {
		var question = $scope.questionRequest;
		parseService.postQuestion(question).then(function(serviceResponse){
			console.log(serviceResponse)
		}, function(error) {
			console.log(error);
		})

	};

});