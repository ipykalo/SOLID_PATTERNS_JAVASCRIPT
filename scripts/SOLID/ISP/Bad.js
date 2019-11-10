define([], function() {
    'use strict';
    
    var Vehicle = function (options) {
        this.type = options.type || "car";
        this.color = options.color || "red";
        this.weight = options.weight || 2000;
        this.speed = options.speed || 200;
    };

    Vehicle.prototype.renderInfo = function() {
        document.body.innerHTML += `
            <div>
                <h1>Vehicle type: ${this.type}</h1>
                <ul>
                    <li>type: ${this.type}</li>
                    <li>color: ${this.color}</li>
                    <li>weight: ${this.weight}</li>
                    <li>speed: ${this.speed}</li>
                </ul>
            </div>
        `;
    };

    Vehicle.prototype.drive = function() {
        console.log(this.type + " is driving with speed " + this.speed);
    };

    Vehicle.prototype.fly = function() {
        console.log(this.type + " is flying with speed " + this.speed);
    };

    Vehicle.prototype.sail = function() {
        console.log(this.type + " is sailing with speed " + this.speed);
    };

    var Car = function(options) {
        Vehicle.call(this, options);
    };

    Car.prototype = Object.create(Vehicle.prototype);

    Car.prototype.fly = function() {
       
    };

    Car.prototype.sail = function() {
        
    };

    var car = new Car({});
    car.fly();
    car.sail();
    car.drive();
    car.renderInfo();
});