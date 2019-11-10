define(["PubSub_API"], function (Module) {
  'use strict';

  var inputs = document.querySelectorAll(".info");
  var form = document.querySelector("form");
  var topic = document.getElementById("topic");
  var subscribers = document.querySelectorAll(".employer");
  var publisher = new Module.Publisher();

  subscribers.forEach(subscriber => {
    subscriber.children[2].addEventListener("click", setEvents.bind(this, subscriber));
  });

  function setEvents(item) {
    var topic = item.children[1].value;
    var subscriber = new Module.Subscriber(item.id)
    var id = publisher.subscribe(topic, subscriber);
    item.children[3].addEventListener("click", publisher.unsubscribe.bind(publisher, id));
  };

  form.addEventListener("submit", notifySubscribers);

  function notifySubscribers(event) {
    event.preventDefault();
    var data = {};
    inputs.forEach(input => {
      var key = input.getAttribute("name");
      data[key] = input.value;
    });
    publisher.notify(topic.value, data);
  };
});