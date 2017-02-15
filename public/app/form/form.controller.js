(function() {
    'use strict';

    angular
        .module('app')
        .controller('FormController', FormController);


    function FormController($location, formService, $state) {
        const vm = this;

        vm.$onInit = function() {}

        vm.submitForm = function() {
            if ($location.path() === '/signup') {
                formService.addUser(vm.user).then(function(data) {
                    $state.go('drive')
                })
            } else {
                formService.loginUser(vm.user).then(function(data) {
                    $state.go('drive')
                })
            }
        }

    }



})();
