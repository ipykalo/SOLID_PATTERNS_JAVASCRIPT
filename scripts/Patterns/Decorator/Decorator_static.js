define([], function () {
    'use strict';

    var Car = function(color, speed, clearance, price) {
        this.color = color || "black";
        this.speed = speed || 180;
        this.clearance = clearance || 15;
        this.price = price || 20000;
    };

    Car.decorators = {};

    Car.decorators.incSpeed = function() {
        this.speed += 100;
        this.price += 2000;
    };

    Car.decorators.incClearance = function() {
        this.clearance += 5;
        this.price += 1000;
    };

    Car.prototype.decorate = function(type) {
        var method = this.constructor.decorators[type];
        
        if (typeof method === "function") {
            for(var key in this.__proto__) {
                if (key !== "decorate" || key !== type) {
                    this.__proto__[type] = method;
                }
            }
        }
    };

    var car = new Car();
    car.decorate("incSpeed");

    car.decorate("incClearance");
    car.incClearance();
    car.incSpeed();
    car.incSpeed();
    console.log(car);
});