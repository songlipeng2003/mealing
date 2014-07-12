'use strict';

angular.module('mealingApp.service', [])

/**
 * @ngdoc overview
 * @name mealingApp
 * @description
 * # mealingApp
 *
 * Main module of the application.
 */
angular
  .module('mealingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mealingApp.service'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope, CartService) {
    $rootScope.addCart = function(goods){
      CartService.add(goods);
    }

    $rootScope.removeCart = function(goods){
      CartService.remove(goods)
    }

    $rootScope.clearCart = function(){
      CartService.clear();
    }

    CartService.init();
  });;
