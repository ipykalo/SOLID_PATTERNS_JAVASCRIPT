define([], function() {
    'use strict';
    
    var car = {
        "color": "black",
        "weight": "2000",
        "power": "190"
    };

    var carProto = Object.create(car);

    var carProto = Object.create(car, {
        "doors": {
            "value": "5",
            "enumerable": true,
            "writable": true,
            "configurable": true
        },
        "getDoors": {
            "enumerable": false,
            "get": function() {
                return this.doors;
            }
        },
        "setDoors": {
            "enumerable": false,
            "set": function(value) {
                this.doors = value;
            }
        }
    });

    /**
     * Alternative 
     */
    var CreatePrototype = (function() {
        function F() {};
        return function(proto) {
            F.prototype = proto;
            return new F();
        }
    })();


});