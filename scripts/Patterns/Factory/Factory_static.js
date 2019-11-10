define(function() {
    'use strict';

    var CarFactory = function() {};

    CarFactory.Sport = function(option) {
        this.color = option && option.color || "red";
        this.doors = option && option.doors || 3;
        this.weight = option && option.weight || 1800;
        this.speed = option && option.speed || 300;
        this.type = "Sport";
    };

    CarFactory.Supermini = function(option) {
        this.color = option && option.color || "yellow";
        this.doors = option && option.doors || 3;
        this.weight = option && option.weight || 1300;
        this.speed = option && option.speed || 120;
        this.type = "Supermini";
    };

    CarFactory.Minivan = function(option) {
        this.color = option && option.color || "black";
        this.doors = option && option.doors || 5;
        this.weight = option && option.weight || 2200;
        this.speed = option && option.speed || 200;
        this.type = "Minivan";
    };

    CarFactory.Crossover = function(option) {
        this.color = option && option.color || "black";
        this.doors = option && option.doors || 5;
        this.weight = option && option.weight || 2800;
        this.speed = option && option.speed || 230;
        this.type = "Crossover";
    };

    CarFactory.factory = function(type, options) {
        if (typeof CarFactory[type] !== "function") {
            throw new Error ("Constructor doesn't exist");
        }
        CarFactory[type].prototype = Object.create(CarFactory.prototype);
        return  new CarFactory[type](options);
    };

    CarFactory.prototype.showCharacteristics = function () {
        console.log(`Color: ${this.color}; Doors: ${this.doors}; Weight: ${this.weight}; Speed: ${this.speed}`);
    };

    CarFactory.prototype.run = function () {
        console.log(`I'm runing with speed: ${this.speed}`);
    };

    var car = CarFactory.factory("Minivan");
    car.run();
});