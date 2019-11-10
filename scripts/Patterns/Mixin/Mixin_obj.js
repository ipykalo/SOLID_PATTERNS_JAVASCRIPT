define([], function() {
    'use strict';
    
    var setterMixin = {
        setName: function(name) {
            this.name = name;
        },

        setPassword: function(password) {
            this.password = password;
        }
    };
    
    var getterMixin = {
        getName: function() {
            console.log(`Name: ${this.name}`);
        },

        getPassword: function() {
            console.log(`Password: ${this.password}`);
        }
    };


    var User = function(name, password) {
        this.name = name;
        this.password = password;
    };

    var extend  = function(object, mixin) {
        Object.keys(mixin).forEach(function (key) {
            if (object[key] !== mixin[key]) {
                object[key] = mixin[key];
            }
        });
    }

    var user = new User("User", 12345);
    extend(user, setterMixin);
    extend(user, getterMixin);
    console.log(user);


});