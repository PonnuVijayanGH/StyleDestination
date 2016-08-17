angular.module('sd-app.router', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	$ionicConfigProvider.backButton.previousTitleText(false);
	$ionicConfigProvider.backButton.icon('ion-chevron-left');
  	$ionicConfigProvider.backButton.text('');
  	$ionicConfigProvider.scrolling.jsScrolling(true);

	$stateProvider

	.state('intro', {
		url: '/intro',
		templateUrl: 'js/modules/intro/intro.html'
	})

	.state('region', {
		url: '/region',
		templateUrl: 'js/modules/region/template/region.html',
		controller: 'RegionController'
	})

	.state('locality', {
		url: '/locality',
		templateUrl: 'js/modules/locality/template/locality.html',
		controller: 'LocalityController'
	})

	.state('speciality', {
		url: '/speciality',
		templateUrl: 'js/modules/speciality/template/speciality.html',
		controller: 'SpecialityController'
	})

	.state('results', {
		url: '/results',
		templateUrl: 'js/modules/results/template/results.html',
		controller: 'ResultsController'
	})

	.state('editsearch', {
		url: '/editsearch',
		templateUrl: 'js/modules/editsearch/template/editsearch.html',
		controller: 'EditSrchController'
	})

	.state('servicedetail', {
		url: '/servicedetail',
		templateUrl: 'js/modules/servicedetail/template/servicedetail.html',
		controller: 'ServiceDetailController'
	});

	$urlRouterProvider.otherwise('/intro');
});
