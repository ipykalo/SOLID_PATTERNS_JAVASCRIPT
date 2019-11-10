define([], function() {
    'use strict';

    var User = (function() {
        var _name = "Dev";
        var _password = "Kony1234";

        var _printInfo = function() {
            console.log("Name: " + _name + "; password: " + _password);
        };

        return {
            setName: function(name) {
                _name = name;
                _printInfo();
            },
            setPassword: function(pass) {
                _password = pass;
                _printInfo();
            },
            geName: function() {
                return _name;
            },
            gePassword: function() {
                return _password;
            }
        };
    })();


});