'use strict';

/**
 * @ngdoc service
 * @name mealingApp.common
 * @description
 * # common
 * Service in the mealingApp.
 */
angular.module('mealingApp')
  .service('CommonService', function Common($http) {
    this.getShops = function(){
      return $http.get('/json/shop.json');
    }
  });
