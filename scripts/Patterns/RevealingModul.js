define([], function() {
    'use strict';
    
    var User = (function() {
        var _name = "Dev";
        var _password = "Kony1234";

        var setName = function(name) {
            _name = name;
            printName();
        };

        var setPassword = function(password) {
            _password = password;
            printName();
        };
        
        var printName =  function() {
            console.log("Name: " + _name);
        };
        
        return {
            setName: setName,
            setPassword: setPassword,
            printName: printName,
        };
    })();
});