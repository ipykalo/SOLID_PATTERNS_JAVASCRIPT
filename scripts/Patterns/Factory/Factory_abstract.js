define(function() {
    'use strict';
    
    var Car = function(option) {
        this.color = option.color || "black";
        this.doors = option.doors || 5;
        this.weight = option.weight || 2000;
    };

    Car.prototype.drive = function() {
        console.log("Car is driving");
    };

    var Boat = function(option) {
        this.speed = option.speed || 100;
        this.weight = option.weight || 400;
        this.length = option.length || 2;
    };

    Boat.prototype.sail = function() {
        console.log("Boat is sailing");
    };

    var Plane = function(option) {
        this.engines = option.engines || 4;
        this.seat  = option.seat || 100;
        this.speed = option.speed || 1000;
    };

    Plane.prototype.fly = function() {
        console.log("Plane is flying");
    };

    var Factory = (function() {
        var factory = {};
    
        var _register = function(Vehicle) {
            factory[Vehicle.name] = Vehicle;
        };

        var _getInstance = function(behavior, options) {
            for (var key in factory) {
                if (factory[key].prototype[behavior]) {
                    return new factory[key](options ? options : {});
                }
            }
        };

        return {
            register: _register,
            getInstance: _getInstance
        };
    })();

    Factory.register(Car);
    Factory.register(Boat);
    Factory.register(Plane);

    var car = Factory.getInstance("drive");
    var plane = Factory.getInstance("fly");
    var boat = Factory.getInstance("sail");

    console.log(car);
    console.log(plane);
    console.log(boat);
});