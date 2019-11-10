define(["Mediator"], function(Module) {
    'use strict';

    var setClickEvent = function () {
        var self = this;
        this.send.addEventListener("click", function () {
            setTimeout(function () {
                self.clearInput();
            }, 100);
            self.sendMessage();
        });
    };

    var Tom = {
        "msg": document.querySelector("#tom"),
        "receiver": document.querySelector("#receiver-tom"),
        "name": "Tom",
        "button": document.querySelector("#tom-send"),
        "privateChat": document.querySelector(".message"),
        "setClickEvent": setClickEvent
    };

    var Niki = {
        "msg": document.querySelector("#niki"),
        "receiver": document.querySelector("#receiver-niki"),
        "name": "Niki",
        "button": document.querySelector("#niki-send"),
        "privateChat": document.querySelector(".message"),
        "setClickEvent": setClickEvent
    };

    var Teon = {
        "msg": document.querySelector("#teon"),
        "receiver": document.querySelector("#receiver-teon"),
        "name": "Teon",
        "button": document.querySelector("#teon-send"),
        "privateChat": document.querySelector(".message"),
        "setClickEvent": setClickEvent
    };

    var chatRoom = {
        "room": document.querySelector(".room"),
    };

    var room = new Module.Room(chatRoom);
    room.register(new Module.User(Tom));
    room.register(new Module.User(Niki));
    room.register(new Module.User(Teon));
});