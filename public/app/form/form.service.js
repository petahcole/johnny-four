(function() {
    'use strict';

    angular
        .module('app')
        .service('formService', formService)

    function formService($http) {
        this.loginUser = function(data) {
            console.log(data);
            return $http({
                url: '/login',
                method: "POST",
                data: data
            });
        }

        this.addUser = function(data) {
            return $http({
                url: '/login/signup',
                method: "POST",
                data: data
            });
        }
    }

}())
