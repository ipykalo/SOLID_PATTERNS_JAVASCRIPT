define(["LSP_Test"], function(Test) {
    'use strict';

    var Shape = function() {};

    Shape.prototype.render = function(data) {
        document.body.innerHTML += `<h1>Result of area: ${data}</h1>`;
    };

    var Rectangle = function(width, height) {
        this.width = width;
        this.height = height;
    };

    Rectangle.prototype = Object.create(Shape.prototype);

    Rectangle.prototype.getArea = function() {
        return this.width * this.height;
    };

    var Square = function(length) {
        this.length = length;
    };

    Square.prototype = Object.create(Shape.prototype);

    Square.prototype.getArea = function() {
        return this.length * this.length;
    };

    var rectangle = new Rectangle(3, 4);
    var square = new Square(3);
    var test = new Test(square);
    test.run();
});