define([], function () {
    'use strict';

    var Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    var Sender = function () { };

    Sender.prototype.send = function (goods, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // TO DO
            } else {
                callback(goods);
            }
        };
        xhr.open("POST", "http://server.com", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(goods));
    };

    var Discount = function (discount) {
        this.discount = discount;
    };

    Discount.prototype.applyDiscount = function (product) {
        if (this.discount.isApplicable) {
            product.price -= product.price * this.discount.value;
            this.discount.isApplicable = false;
        }
    };


    var Buscet = function () {
        this.productsList = [];
        this.counterId = -1;
    };

    Buscet.prototype.addProduct = function (name, price, discount) {
        var product = new Product(++this.counterId, name, price);
        if (discount) {
            product.discount = new Discount(discount);
        }
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
        var sendManager = new Sender();
        var goodsList = this.getAllProducts();

        if (this.isEmpty(goodsList)) {
            sendManager.send(this.applyDiscount(goodsList), callback);
        }
    };

    Buscet.prototype.applyDiscount = function (list) {
        list.forEach(function (product) {
            if (product.discount.discount) {
                product.discount.applyDiscount(product);
            }
        });
        return list;
    };
    
    var silver = {
        isApplicable: true,
        value: 0.2
    };

    var gold = {
        isApplicable: true,
        value: 0.3
    };

    var platinum = {
        isApplicable: true,
        value: 0.5
    };


    var buscet = new Buscet();
    var fridgId = buscet.addProduct("fridge", 15000, Object.create(platinum));
    var tvId = buscet.addProduct("tv-set", 30000, Object.create(platinum));
    var waveId = buscet.addProduct("micro-wave", 20000, Object.create(platinum));
    buscet.sendGoods(succsessCallback);

    function succsessCallback(data) {
        console.log(data);
    };
});