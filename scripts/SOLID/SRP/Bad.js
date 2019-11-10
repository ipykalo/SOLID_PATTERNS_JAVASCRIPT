define([], function () {
    'use strict';

    var Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    var Buscet = function () {
        this.productsList = [];
        this.counterId = -1;
    };

    Buscet.prototype.addProduct = function (name, price) {
        var product = new Product(++this.counterId, name, price);
        this.productsList.push(product);
        return this.counterId;
    };

    Buscet.prototype.deleteProduct = function (id) {
        var index = this.productsList.findIndex(item => item.id === id);
        if (index > -1) {
            this.productsList.splice(index, 1);
        }
    };

    Buscet.prototype.getProduct = function (name) {
        return this.productsList.find(item => item.name === name);
    };

    Buscet.prototype.getAllProducts = function () {
        return this.productsList;
    };

    Buscet.prototype.isEmpty = function (list) {
        return list && list.length ? true : false;
    };

    Buscet.prototype.sendGoods = function (callback) {
        var goodsList = this.getAllProducts();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // TO DO
            } else {
                callback(goodsList);
            }
        };
        xhr.open("POST", "http://server.com", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(goodsList, callback));
    };

    var buscet = new Buscet();
    var tvId = buscet.addProduct("tv-Set", 25000);
    var fridgeId = buscet.addProduct("fridge", 15000);
    buscet.sendGoods(succsessCallback);

    function succsessCallback(data) {
        console.log(data);
    };

});