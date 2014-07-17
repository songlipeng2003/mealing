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
    'ui.notify',
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
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['notificationServiceProvider', function(notificationServiceProvider) {
    notificationServiceProvider.setDefaults({
      history: false,
      delay: 4000,
      styling: 'bootstrap3',
        closer: false,
        closer_hover: false
    });

}])
  .run(function ($rootScope, CartService, notificationService) {
    $rootScope.addCart = function(goods){
      CartService.add(goods);

      notificationService.info(goods.name+"加入购物车成功");
    }

    $rootScope.removeCart = function(goods){
      CartService.remove(goods);

      notificationService.info(goods.name+"从购物车删除成功");
    }

    $rootScope.clearCart = function(){
      CartService.clear();

      notificationService.notice("清空购物车成功");
    }

    CartService.init();
  });;
