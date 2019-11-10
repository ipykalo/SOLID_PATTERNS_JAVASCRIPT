define([], function () {
  'use strict';

  var Publisher = function() {
    this.topics = {};
    this.id = -1;
  };

  Publisher.prototype.subscribe = function(topic, subscriber) {
    var self = this;
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    ++this.id;
    this.topics[topic].push({
      id: self.id,
      sub: subscriber
    });
    return this.id;
  };

  Publisher.prototype.unsubscribe = function(id) {
    for (var topic in this.topics) {
      if (this.topics[topic] instanceof Array) {
        this.topics[topic].forEach(function (subscriber, index, list) {
          if (subscriber.id === id) {
            list.splice(index, 1);
          }
        });
      }
    }
  };

  Publisher.prototype.notify = function(topic, data) {
    if (this.topics[topic]) {
      this.topics[topic].forEach(function (subscriber) {
        subscriber.sub.update(data);
      });
    }
  };

  var Subscriber = function(id) {
    this.element = document.getElementById(id);
  };

  Subscriber.prototype.update = function(data) {
    if (data instanceof Object) {
      var div = document.createElement("div");
      div.setAttribute("class", "employee");
      
      for (var key in data) {
        var p = document.createElement("p");
        p.innerHTML += `
          ${key}: ${data[key]}
        `;
        div.appendChild(p);
      }
      this.element.appendChild(div);
    }
  };

  return {
    Publisher,
    Subscriber
  };
});