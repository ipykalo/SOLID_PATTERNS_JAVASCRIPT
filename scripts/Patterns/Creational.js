define([], function() {
    'use strict';

    var obj = Object.defineProperty({}, "color", {
        value: "red",
        enumerable: true,
        writable: true,
        configurable: true
    });

    Object.defineProperties(obj, {
        "firstProperty": {
            value: "Hello World",
            enumerable: true,
            writable: true,
            configurable: true
        },
        "fsecondProperty": {
            value: "Foo bar",
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    /**
     * Custom function add new property to object
     * @param {Object} object - base object
     * @param {String} property - new property
     * @param {String} value - value of property
     */
    var defineProperty = function (object, propertyName, value) {  
        var config = {
            "value": value,
            "enumerable": true,
            "writable": true,
            "configurable": true
        }
        Object.defineProperty(object, propertyName, config); 
    };

    var dog = Object.create(null);
    defineProperty(dog, "name", "Bingo");
    defineProperty(dog, "age", "5");
});