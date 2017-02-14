(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);


    function AppController($mdDialog) {
        const vm = this;
        vm.$onInit = function() {}

        vm.showSignin = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'app/login/login.template.html',
                    parent: 'app',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: vm.customFullscreen
                })
                .then(function(answer) {
                    console.log('Logged In');
                })
        };

        vm.showSignUp = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'app/login/signup.template.html',
                    parent: 'app',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: vm.customFullscreen
                })
                .then(function(answer) {
                    console.log('Logged In');
                })
        };


        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    }

})();
