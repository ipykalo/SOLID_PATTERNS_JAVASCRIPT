define([], function() {
    'use strict';

    var Admin = function(name, password) {
        this.name = name;
        this.password = password;
    };

    Admin.prototype.getName = function() {
        console.log(`Name: ${this.name}`);
    };

    Admin.prototype.setName = function(name) {
        this.name = name;
    };

    var User = function(name, password) {
        this.name = name;
        this.password = password;
    };

    User.prototype.getPassword = function() {
        console.log(`Password: ${this.password}`);
    };

    User.prototype.setPassword = function(password) {
        this.password = password;
    };

    var Moderator = function(name, password) {
        this.name = name;
        this.password = password;
    };

    var extend = function(subCluss, superClass) {
        for (var method in superClass.prototype) {
            if (!subCluss.prototype[method]) {
                subCluss.prototype[method] = superClass.prototype[method];
            }
        }
    };

    extend(Moderator, User);
    extend(Moderator, Admin);

    var moderator = new Moderator("Name", "password");
    console.log(moderator);
});