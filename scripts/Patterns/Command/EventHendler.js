define(["Command_API"], function (API) {
    'use strict';

    var mumbers = document.querySelector(".numbers");
    var operations = document.querySelector(".operation");
    var display = document.querySelector(".display");
    var calculator = API.calculator();

    mumbers.childNodes.forEach(element => {
        if (element.innerText) {
            element.addEventListener("click", displayChar.bind(this, element.innerText));
        }
    });

    operations.childNodes.forEach(element => {
        if (element.innerText) {
            element.addEventListener("click", identifyOperation.bind(this, element.innerText));
        }
    });

    var commands = {
        add: function (currentValue, value) {
            return currentValue + value;
        },
        subtract: function (currentValue, value) {
            return currentValue - value;
        },
        multiply: function (currentValue, value) {
            return currentValue * value;
        },
        divide: function (currentValue, value) {
            return currentValue / value;
        }
    };

    function identifyOperation(symbol) {
        switch (symbol) {
            case "+":
                executeOperation(commands["add"], Number(display.innerText));
                displayChar(symbol);
                break;
            case "-":
                executeOperation(commands["subtract"], Number(display.innerText));
                displayChar(symbol);
                break;
            case "/":
                executeOperation(commands["divide"], Number(display.innerText));
                displayChar(symbol);
                break;
            case "*":
                executeOperation(commands["multiply"], Number(display.innerText));
                displayChar(symbol);
                break;
            case "=":
                equality(Number(display.innerText));
                break;
            case "C":
                calculator.cleanValue();
                clearDesplayValue();
                break;
        }
    };

    function executeOperation(operation, value) {
        var isExecute = true;
        if (calculator.getValue() === 0) {
            calculator.setValue(value);
            isExecute = false;
        };
       calculator.saveAndExecute(isExecute, API.command(operation), value);
    };

    function equality(value) {
        calculator.saveAndExecute(true, false, value);
        display.innerText = calculator.getValue();
        calculator.cleanValue();
    };

    function displayChar(value) {
        var code = value.charCodeAt(0);
        var current = display.innerText;

        if (code >= 48 && code <= 57 && current != 0 && Number(current)) {
            display.innerText += value
        } else {
            display.innerText = value;
        }
    };

    function clearDesplayValue() {
        display.innerText = 0;
    };
});