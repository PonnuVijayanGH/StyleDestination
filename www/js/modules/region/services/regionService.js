angular.module('sd-app.region')

.service('RegionService',['$http','$q', function($http, $q) {

	this.callWebService = function(url){

		var deferred = $q.defer();

		var httpObj = {};
		httpObj.url = url;

		$http(httpObj).success(function(response, status){

			deferred.resolve(response);
		}).error(function(errors, status){
			alert("Error on data fetch!!");
		});

		return deferred.promise;
	}

	this.getRegionsData = function(){
		return this.callWebService("js/modules/data/regions.json");
	};

}]);