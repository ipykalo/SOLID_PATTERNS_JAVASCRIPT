define([], function () {
    'use strict';

    var Macbook = function () {
        this.ram = 2;
        this.price = 1500;
    };

    Macbook.prototype = {
        getInfo: function () {
            console.log(`Ram: ${this.ram}; price: ${this.price}`);
        },
    };

    var MacbookDecorator = function (mac) {
        this.macbook = mac;
    };

    MacbookDecorator.prototype = {
        add4GBRam: function () {
            this.macbook.ram += 4;
            this.macbook.price += 100;
        },
        add8GBRam: function () {
            this.macbook.ram += 8;
            this.macbook.price += 200;
        },
        add16GBRam: function () {
            this.macbook.ram += 16;
            this.macbook.price += 400;
        }
    };

    
    var mac = new Macbook();
    var decorator = new MacbookDecorator(mac);
    decorator.add16GBRam();

    console.log(mac);

});