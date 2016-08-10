// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
'use strict';
angular.module('sd-app', ['ionic', 'sd-app.router'/*, 'sd-app.regionController'*/])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
/*.config(require('./router'));*/

/*.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider

  .state('region', {
    url: '/region',
    templateUrl: 'js/modules/region/template/region.html',
    controller: 'RegionController'
  })

  .state('locality', {
    url: '/locality',
    templateUrl: 'modules/locality/template/locality.html',
    controller: 'LocalityController'
  })

  .state('results', {
    url: '/results',
    templateUrl: 'modules/results/template/results.html',
    controller: 'ResultsController'
  })

  .state('editsearch', {
    url: '/editsearch',
    templateUrl: 'modules/editsearch/template/editsearch.html',
    controller: 'EditSrchController'
  })

  .state('servicedetail', {
    url: '/servicedetail',
    templateUrl: 'modules/servicedetail/template/servicedetail.html',
    controller: 'ServiceDetailController'
  });

  $urlRouterProvider.otherwise('/region');
});*/
