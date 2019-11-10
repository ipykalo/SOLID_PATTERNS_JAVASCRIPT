define([], function () {
    'use strict';

    function Sandbox() {
        var args = Array.prototype.slice.call(arguments);
        var callback = args.pop();
        var modules = args[0] && typeof args[0] === "string" ? args : args[0];

        if (!(this instanceof Sandbox)) {
            return new Sandbox(modules, callback);
        }

        if (!modules || modules[0] === "*") {
            modules = [];
            for (var mdl in Sandbox.modules) {
                if (Sandbox.modules.hasOwnProperty(mdl)) {
                    modules.push(mdl);
                }
            }
        };

        this.userName = "";
        this.password = "";

        modules.forEach(function(mdl) {
            Sandbox.modules[mdl](this);
        }.bind(this));

        callback(this);
    };

    Sandbox.prototype.setName = function(name) {
        this.userName = name;
    };

    Sandbox.prototype.setPassword = function(password) {
        this.password = password;
    };

    Sandbox.prototype.getUserInfo = function() {
        var self = this;
        return {
            userName: self.userName,
            userPassword: self.password
        };
    };

    Sandbox.modules = {};

    Sandbox.modules.validation = function(sandbox) {
        sandbox.validateEmail = function(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        };

        sandbox.validatePhone = function(phone) {
            return /^\+?([0-9]{3})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/.test(phone);
        };

        sandbox.validateUser = function(userName, password) {
            return sandbox.userName === userName && sandbox.password === password;
        };
    };

    Sandbox.modules.httpRequest = function(sandbox) {
        sandbox.send = function (data, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // TO DO
                } else {
                    callback(data);
                }
            };
            xhr.open("POST", "http://server.com", true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(data));
        };
    };

    Sandbox("httpRequest", function(sandbox) {
        sandbox.setName("Ivan");
        sandbox.setPassword("1234");
        var data = sandbox.getUserInfo();
        sandbox.send(data, function(data) {
            console.log(data)
        });
    });

    Sandbox(["validation"], function(sandbox) {
        sandbox.setName("Dev");
        sandbox.setPassword("000000");
        var isValid = sandbox.validateUser("Dev", "0000008");
        console.log(isValid);
    });



});