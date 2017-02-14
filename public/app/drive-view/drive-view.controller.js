(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriveViewController', DriveViewController);


    function DriveViewController() {
        const vm = this;
        vm.$onInit = function() {
            console.log('drive me ooooh')

            // Create h264 player
            vm.uri = "ws://" + document.location.host;
            vm.wsavc = new WSAvcPlayer(vm.stream, "webgl", 1, 35);
            vm.wsavc.connect(vm.uri);

            //expose instance for button callbacks
            window.wsavc = vm.wsavc;
        }

    }

})();
