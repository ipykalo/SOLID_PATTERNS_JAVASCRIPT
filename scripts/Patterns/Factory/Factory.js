define(function() {
    'use strict';
    
    var Car = function(option) {
        this.color = option.color || "black";
        this.doors = option.doors || 5;
        this.weight = option.weight || 2000;
    };

    var Truck = function(option) {
        this.wheels = option.wheels || 4;
        this.weight = option.weight || 6000;
        this.type = option.kind || "trailer";
    };

    var Bicycle = function(option) {
        this.color = option.color || "red";
        this.wheels = option.wheels || 2;
        this.weight = option.weight || 10;
    };

    var VehicleFactory = function() {};

    VehicleFactory.prototype.vehicleClass = Car;

    VehicleFactory.prototype.cretaeVehicle = function(options) {
        var type = null;
        switch(options.type) {
            case "car": 
                type = Car;
                break;
            case "truck": 
                type = Truck;
                break;
            case "bicycle":
                type = Bicycle;
                break;
        }
        this.vehicleClass = type;
        return new this.vehicleClass(options);
    };

    var factory = new VehicleFactory();
    var truck = factory.cretaeVehicle({type: "truck"});
    console.log(truck);

});