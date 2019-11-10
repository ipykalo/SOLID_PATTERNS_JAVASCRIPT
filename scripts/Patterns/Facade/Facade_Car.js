define([""], function (Facade) {
    'use strict';

    var Car = (function () {
        var _speed = 0;
        var _max_speed = 180;
        var _current_transmission = "N";

        var Engine = function () { };

        Engine.prototype.start = function () {
            console.log("Engine is started");
        };

        Engine.prototype.stop = function () {
            console.log("Engine is stopped");
        };

        var Transmission = function () { };

        Transmission.prototype.first = function () {
            _current_transmission = "first";
        };

        Transmission.prototype.second = function () {
            _current_transmission = "second";
        };

        Transmission.prototype.third = function () {
            _current_transmission = "third";
        };

        Transmission.prototype.fourth = function () {
            _current_transmission = "fourth";
        };

        Transmission.prototype.back = function () {
            _current_transmission = "back";
        };

        var showInfo = function () {
            console.log(`Speed: ${_speed}
                        Transmission: ${_current_transmission}`);
        };

        var _engineInstance = null,
            _transmInstance = null;

        var initialize = function () {
            if (!_engineInstance && !_transmInstance) {
                _engineInstance = new Engine();
                _transmInstance = new Transmission();
            }
            return {
                engine: _engineInstance,
                transmission: _transmInstance
            }
        };

        var accelerate = function () {
            if (_speed < _max_speed) {
                _speed += 10;
            } 
            if (_speed > 30) {
                initialize().transmission.second();
            }
            if (_speed > 70) {
                initialize().transmission.third();
            }
            if (_speed > 110) {
                initialize().transmission.fourth();
            }
        };

        var decelerate = function () {
            if (_speed > 0) {
                _speed -= 10;
                _speed = _speed < 0 ? 0 : _speed;
            }
            if (_speed < 110) {
                initialize().transmission.third();
            }
            if (_speed < 70) {
                initialize().transmission.second();
            }
            if (_speed < 30) {
                initialize().transmission.first();
            }
        };

        var back = function () {
            if (_speed === 0) {
                initialize().transmission.back();
            } else {
                console.log("Reduce speed to 0");
            }
        };

        return {
            start: function () {
                initialize().engine.start();
                showInfo();
            },
            stop: function () {
                initialize().engine.stop();
                showInfo();
            },
            run: function () {
                initialize().transmission.first();
                showInfo();
            },
            acceleration: function () {
                accelerate();
                showInfo();
            },
            decelerate: function () {
                decelerate();
                showInfo();
            },
            back: function () {
                back();
                showInfo();
            }
        }
    })();

    Car.start();
    Car.run();



});