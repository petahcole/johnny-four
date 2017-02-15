(function() {
    'use strict';

    angular
        .module('app')
        .controller('FormController', FormController);


    function FormController($location) {
        const vm = this;

        vm.$onInit = function() {
          console.log('hello from the controller')
          console.log($location.path());
  
        }

        vm.submitForm = function()  {
          console.log('submit form');
          if ($location.path() === '/signup') {
            console.log('hey, signup!');
          } else {
            console.log('hey login!');
          }
        }


    }



})();
