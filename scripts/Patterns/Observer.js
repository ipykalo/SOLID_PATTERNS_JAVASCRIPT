define([], function() {
    'use strict';

    var Subject = function() {
        this.observers = [];
        this.id = -1;
    };

    Subject.prototype.add = function(observer) {
        var self = this;
        this.observers.push({
            id: ++self.id,
            ob: observer
        });
        return this.id;
    };

    Subject.prototype.remove = function(id) {
        this.observers.forEach(function(item, index, list) {
            if (item.id === id) {
                list.splice(index, 1);
            }
        })
    }

    Subject.prototype.notify = function(data) {
        this.observers.forEach(function(item) {
            item.ob.update(data);
        })
    };

    var Observer = function(name) {
        this.name = name;
    };

    Observer.prototype.update = function(data) {
        console.log(this.name + "----- " + data);
    };

    var first = new Observer("first");
    var second = new Observer("second");
    var third = new Observer("third");

    var subject = new Subject();
    var fIndex = subject.add(first);
    var sIndex = subject.add(second);
    var tIndex = subject.add(third);

    subject.notify("State is changed");
});