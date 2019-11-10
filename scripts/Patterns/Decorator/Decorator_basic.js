define([], function () {
    'use strict';

    var Macbook = function () {
        this.ram = 2;
        this.price = 1500;
    };

    Macbook.prototype.getInfo = function () {
        console.log(`Ram: ${this.ram}; price: ${this.price}`);
    };

    function add4GBRam(macbook) {
        macbook.ram += 4;
        macbook.price += 100;
    };

    function add8GBRam(macbook) {
        macbook.ram += 8;
        macbook.price += 200;
    };

    function add16GBRam(macbook) {
        macbook.ram += 16;
        macbook.price += 400;
    };

    var mac = new Macbook();
  add16GBRam(mac);
    console.log(mac);
});