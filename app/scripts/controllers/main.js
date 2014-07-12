'use strict';

/**
 * @ngdoc function
 * @name mealingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mealingApp
 */
angular.module('mealingApp')
  .controller('MainCtrl', function ($scope, CommonService) {
    CommonService.getShops().success(function(data){
      $scope.shops = data.shops;
    });
  });
