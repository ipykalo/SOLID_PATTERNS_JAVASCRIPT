define([], function () {
    'use strict';

    var User = function (element) {
        this.send = element.button;
        this.message = element.msg;
        this.userName = element.name;
        this.receiver = element.receiver;
        this.privateRoom = element.privateChat;
        this.clickEvent = element.setClickEvent.bind(this);
        this.syncRoom = null;
    };

    User.prototype.setRoomSync = function (func) {
        this.syncRoom = func;
    };

    User.prototype.clearInput = function () {
        this.message.value = "";
    };

    User.prototype.sendMessage = function () {
        var self = this;
        var data = {
            "from": self.userName,
            "to": self.receiver.value.toLowerCase(),
            "message": self.message.value
        }

        if (typeof this.syncRoom === "function") {
            this.syncRoom(data);
        }
    };

    User.prototype.reciveMessage = function (fromUser, msg) {
        var template = `<p> 
                            <span>From: <span>
                            <span style="color:green">${fromUser} => <span>
                            <span style="color:red">${msg}</span>
                        </p>`;
        this.privateRoom.querySelector("h4").innerText = "User: " + this.userName;
        this.privateRoom.innerHTML += template;
    };

    /**
     * class Room - Mediator
     * @param {String} selector - css selector
     */
    var Room = function (room) {
        this.users = {};
        this.chatRoom = room;
    };

    Room.prototype.register = function (user) {
        var name = user.userName.toLowerCase();
        if (!this.users[name]) {
            this.users[name] = user;
        }
        this.initUser(user);
    };

    Room.prototype.initUser = function (user) {
        user.clickEvent();
        user.setRoomSync(this.sendMessage.bind(this));
    };

    Room.prototype.sendMessage = function (data) {
        if (data.to) {
            this.sendMessageToUser(data.from, data.to, data.message);
        } else {
            this.sendAll(data.from, data.message);
        }
    };

    Room.prototype.sendMessageToUser = function (fromUser, toUser, message) {
        var to = this.users[toUser];
        if (to) {
            to.reciveMessage(fromUser, message);
        }
    };

    Room.prototype.sendAll = function (from, message) {
        this.chatRoom.room.innerHTML +=
            `<p>
                <span style="color:green">${from}: </span> 
                ${message}
            </p>`;
    };

    return {
        Room,
        User
    }
});