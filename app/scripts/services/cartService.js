'use strict';

/**
 * @ngdoc service
 * @name mealingApp.cartService
 * @description
 * # cartService
 * Service in the mealingApp.
 */
angular.module('mealingApp.service')
  .service('CartService', function CartService($rootScope, $cookieStore) {
    var self =  this;

    this.init = function(){
      $rootScope.cart = $cookieStore.get('cart');
    }

    this.add = function(goods){
      var cart = self.getCart();
      cart.goods_list['P'+goods.id] = goods;

      self.save(cart);
    }

    this.remove = function(goods){
      var cart = self.getCart();
      delete cart.goods_list['P'+goods.id];

      self.save(cart);
    }

    this.getCart = function(){
      var cart = $cookieStore.get('cart');
      if(!cart){
        cart = {goods_list:{}};
      }

      return cart;
    }

    this.save = function(cart){
      $cookieStore.put('cart', cart);
      $rootScope.cart = cart;
    }

    this.clear = function(){
      var cart = {goods_list:{}};

      self.save(cart);
    }
  });
