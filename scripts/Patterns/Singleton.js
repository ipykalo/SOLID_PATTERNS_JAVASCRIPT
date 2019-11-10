define([], function() {
    'use strict';

    var OrderManager = (function() {
        var _instance = null;

        var Order = function() {
            this.list = [];
        };

        Order.prototype.addItem = function(item) {
            this.list.push(item);
        };

        Order.prototype.deleteItem = function(item) {
            var index = this.list.findIndex(el => el === item);
            this.list.splice(index, 1);
        };

        Order.prototype.showOrder = function() {
            console.log(this.list);
        };

        return {
            getInstance: function() {
                if (!_instance) {
                    _instance = new Order();
                };
                return _instance;
            }
        };
    }());


    /**
     * Instance in a Static Property
     * @param {String} name 
     * @param {Number} age 
     */
    var User = function(name, age) {
        if (typeof User.instance === "object") {
            return User.instance;
        }
        this.name = name;
        this.age = age;
        User.instance = this;
    };

    /**
     * Instance in a Closure
     * @param {String} name 
     * @param {Number} age 
     */
    var Admin = function(name, age) {
        this.name = name;
        this.age = age;
        var instance = this;
        
        Admin = function() {
            return instance;
        }
    };



});