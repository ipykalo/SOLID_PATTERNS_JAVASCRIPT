define([], function () {
    'use strict';

    var Product = function (name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount || {}
    };

    Product.prototype.setDiscount = function (discount) {
        this.discount = discount
    };

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


    var Buscet = function (server) {
        this.server = server;
        this.productsList = [];
        this.counterId = -1;
    };

    Buscet.prototype.addProduct = function (product) {
        product.id = ++this.counterId;
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

        if (this.isEmpty(goodsList)) {
            this.server.send(this.applyDiscount(goodsList), callback);
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

    Buscet.prototype.setServer = function (server) {
        this.server = server;
    };

    (function (Product, Sender, Discount, Buscet) {
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
        
        var fridge = new Product("fridge", 15000, new Discount(Object.create(silver)));
        var tvSet = new Product("tv-set", 30000, new Discount(Object.create(silver)));
        var microWave = new Product("micro-wave", 20000, new Discount(Object.create(platinum)));

        var buscet = new Buscet(new Sender());
        var fridgId = buscet.addProduct(fridge);
        var tvSetId = buscet.addProduct(tvSet);
        var microWaveId = buscet.addProduct(microWave);
        buscet.sendGoods(succsessCallback);

        function succsessCallback(data) {
            console.log(data);
        };
    })(Product, Sender, Discount, Buscet);
});