define([], function() {
    'use strict';

    var Calculator = function() {
        this.displayValue = 0;
        this.currentCommand = null;
        this.lastCommand = null;
    };
    
    Calculator.prototype.saveAndExecute = function(isExecute, command, value) {
        if (isExecute && command) {
            this.saveCommand(command);
            this.executeCurrentCommand(value);
        } else if (isExecute && !command) {
            this.executeLastCommand(value);
        } else {
            this.saveCommand(command);
        }
    };

    Calculator.prototype.saveCommand = function(command) {
        this.currentCommand = this.lastCommand ? this.lastCommand : this.currentCommand;
        this.lastCommand  = command;
    };

    Calculator.prototype.executeCurrentCommand = function(value) {
        this.displayValue = this.currentCommand.execute(this.displayValue, value);
    };

    Calculator.prototype.executeLastCommand = function(value) {
        this.displayValue = this.lastCommand.execute(this.displayValue, value);
    };

    Calculator.prototype.getValue = function() {
        return this.displayValue;
    };

    Calculator.prototype.setValue = function(value) {
        this.displayValue = value;
    };

    Calculator.prototype.cleanValue = function() {
        this.displayValue = 0;
    };
    
    /**
     * @param {function} encapsulated command
     * @param {number} value 
     */
    var Command = function(func) {
        this.execute = func; 
    };

    return {
        "calculator": function() {
            return new Calculator();
        },
        "command": function(callback) {
            return new Command(callback);
        }
    }
});