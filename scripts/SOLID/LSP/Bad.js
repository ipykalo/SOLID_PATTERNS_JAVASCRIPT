define(["LSP_Test"], function(Test) {
    'use strict';
    
    var Rectangle = function() {
        this.width = 0;
        this.height = 0;
    };

    Rectangle.prototype.setWidth = function(width) {
        this.width = width;
    };

    Rectangle.prototype.setHeight = function(height) {
        this.height = height;
    };

    Rectangle.prototype.getArea = function() {
        return this.width * this.height;
    };

    Rectangle.prototype.render = function(data) {
        document.body.innerHTML += `<h1>Area of rectangle is: ${data}</h1>`;
    };

    var Square = function() {
        Rectangle.call(this);
    };

    Square.prototype = Object.create(Rectangle.prototype);

    Square.prototype.setWidth = function(width) {
        this.width = width;
        this.height = width;
    };

    Square.prototype.setHeight = function(height) {
        this.width = height;
        this.height = height;
    };

    var rectangle = new Rectangle();
    var squere = new Square();
    var test = new Test(squere);
    test.run();
});