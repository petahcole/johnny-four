(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriveViewController', DriveViewController);


    function DriveViewController() {
        const vm = this;
        vm.$onInit = function() {
            console.log('drive me ooooh')

            var canvas = document.createElement("canvas");
            document.body.appendChild(canvas);

            // Create h264 player
            var uri = "ws://" + document.location.host;
            var wsavc = new WSAvcPlayer(canvas, "webgl", 1, 35);
            wsavc.connect(uri);

            //expose instance for button callbacks
            window.wsavc = wsavc;
        }

    }

})();
