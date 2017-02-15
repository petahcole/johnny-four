(function() {
    'use strict';

    angular
        .module('app')
        .controller('DialogController', DialogController);


    function DialogController() {
        const vm = this;
        console.log('login controller working!')

        vm.$onInit = function() {
          console.log('login controller working!')
        }

    }



})();
