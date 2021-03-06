angular.module('sd-app.ionicSelect', [])

.directive('ionSelect', function($timeout) {
  return {
    restrict: 'EAC',
    scope: {
      label: '@',
      labelField: '@',
      provider: '=',
      ngModel: '=?',
      ngValue: '=?',

    },
    require: '?ngModel',
    transclude: false,
    replace: false,
    template: 
    '<div class="item item-input-inset ion-input-select ion-item-wrapper">' + 
    '<label class="item-input-wrapper ion-item-wrapper">' + 
     '<input id="filtro" type="search" placeHolder="Search" ng-model="ngModel" ng-value="ngValue" ng-keydown="onKeyDown()"/>' + 
     '</label>' + 
     '<button class="button button-small button-clear" ng-click="open()">' + 
     '</button>' + 
     '</div>' + 
     '<div class="optionList padding-left padding-right" ng-show="showHide">' + 
     '<ion-scroll>' + 
     '<ul class="list">' + 
     '<li class="item" ng-click="selecionar(item)" ng-repeat="item in provider | dynamicFilter:[labelField,ngModel]">{{item[labelField]}}</li>' + 
     '</ul>' + 
     '</ion-scroll>' + 
     '</div>',
    link: function(scope, element, attrs, ngModel) {
      scope.ngValue = scope.ngValue !== undefined ? scope.ngValue : '';
      scope.selecionar = function(item) {
        ngModel.$setViewValue(item);
        scope.showHide = false;
      };

      element.bind('click', function() {
        // element.find('input').focus();
      });

      scope.open = function() {
        scope.ngModel = undefined;
        $timeout(function() {
          return scope.showHide = !scope.showHide;
        }, 100);
      };
      scope.onKeyDown = function() {
        scope.showHide = true;
      };

      scope.$watch('ngModel', function(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (scope.showHide === false) {
            element.find('input').val(newValue[scope.labelField]);
          }
        }
        if (!scope.ngModel) {
          scope.showHide = false;
        }
      });

    },
  };
}).filter('dynamicFilter', ["$filter", function ($filter) {
    return function (array, keyValuePairs) {
        var obj = {}, i;
        for (i = 0; i < keyValuePairs.length; i += 2) {
            if (keyValuePairs[i] && keyValuePairs[i+1]) {
                obj[keyValuePairs[i]] = keyValuePairs[i+1];
            }
        }
        return $filter('filter')(array, obj);
    }
}]);
