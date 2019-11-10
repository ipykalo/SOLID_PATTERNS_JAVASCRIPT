define([], function() {
    'use strict';

    var Vehicle = function (options) {
        this.type = options.type || "car";
        this.weight = options.weight || 2000;
        this.speed = options.speed || 200;
    };

    Vehicle.prototype.renderInfo = function() {
        document.body.innerHTML += `
            <div>
                <h1>Vehicle type: ${this.type}</h1>
                <ul>
                    <li>type: ${this.type}</li>
                    <li>weight: ${this.weight}</li>
                    <li>speed: ${this.speed}</li>
                </ul>
            </div>
        `;
    };

    var RoadVehicle = function (options) {
        Vehicle.call(this, options);
    };

    RoadVehicle.prototype = Object.create(Vehicle.prototype);

    RoadVehicle.prototype.drive = function() {
        console.log(this.type + " is driving with speed " + this.speed);
    };

    var FlyingVehicle = function (options) {
        Vehicle.call(this, options);
    };

    FlyingVehicle.prototype = Object.create(Vehicle.prototype);

    FlyingVehicle.prototype.fly = function() {
        console.log(this.type + " is flying with speed " + this.speed);
    };

    var SailingVehicle = function (options) {
        Vehicle.call(this, options);
    };

    SailingVehicle.prototype = Object.create(Vehicle.prototype);

    SailingVehicle.prototype.sail = function() {
        console.log(this.type + " is sailing with speed " + this.speed);
    };

    var car = new RoadVehicle({type: "car", speed: 250, weight: 2000});
    car.renderInfo();
    car.drive();

    var plane = new FlyingVehicle({type: "plane", speed: 1000, weight: 10000});
    plane.renderInfo();
    plane.fly();

    var boat = new SailingVehicle({type: "boat", speed: 80, weight: 500});
    boat.renderInfo();
    boat.sail();
});