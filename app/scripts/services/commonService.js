'use strict';

/**
 * @ngdoc service
 * @name mealingApp.common
 * @description
 * # common
 * Service in the mealingApp.
 */
angular.module('mealingApp.service')
  .service('CommonService', function CommonService($http) {
    this.getShops = function(){
      return $http.get('/json/shop.json');
    }
  });
