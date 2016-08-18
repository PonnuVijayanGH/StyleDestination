angular.module('sd-app.region')

.controller('RegionController', ['$scope', 'RegionService',
 function($scope, RegionService) {

 	$scope.regionsList = [];
	RegionService.getRegionsData().then(function(data){
 		
 		if(angular.isArray(data.regions)){

 			$scope.regionsList = data.regions;
 		}
 		else{

 			$scope.regionsList = [data.regions];

 		}
 		
	}, function(){
		//failure handler
	});
	
}]);