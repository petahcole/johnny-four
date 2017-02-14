(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriveViewController', DriveViewController);


    function DriveViewController() {
        const vm = this;
        vm.$onInit = function() {
            console.log('drive me ooooh')
        }

    }

})();
