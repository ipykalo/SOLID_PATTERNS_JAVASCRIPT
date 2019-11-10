define([], function() {
    'use strict';
    
    var TestRectangle = function(rectangle) {
        this.rectangle = rectangle;
    };

    TestRectangle.prototype.run = function() {
        this.rectangle.setWidth(10);
        this.rectangle.setHeight(4);
        this.rectangle.render(this.rectangle.getArea());
    };

    var TestShape = function(shape) {
        this.shape = shape;
    };

    TestShape.prototype.run = function() {
        this.shape.render(this.shape.getArea());
    };

    return TestShape;
});