'use strict';

/**
 * @ngdoc function
 * @name mealingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mealingApp
 */
angular.module('mealingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
