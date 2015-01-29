var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function() {
	return {
		request: function(config) {
			config.headers = {'X-Parse-Application-Id': 'th1IWl7XAby3dwdsmBCF2oyzX6uNRb06Wh609ma4', 'X-Parse-REST-API-Key': 'n8eBWUVtHcIniwbZS5x9ShaONGoj0DR96PQd1Zlr'};
			return config;
		}
	};
});