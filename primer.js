"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// import from javascript module
var NameAndWeather_1 = require("./modules/NameAndWeather");
//console.log("Hello");
// define and using function
/*
let myFunc = function() {
    console.log("This is a statement");
};

myFunc();
*/
// using rest parameter
/*
let myFunc = function(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Args: " + extraArgs[i]);
    }
}

myFunc("Adam", "sunny", "one", "two", "three");
*/
// high-order function
/*
let myFunc = function(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

console.log(myFunc(function() {
    return "Adam";
}));
*/
// closure feature allow inner function access outer function variable
var myGlobalVar = "apple";
var myFunc = function (name) {
    var myLocalVar = "sunny";
    /*
    let innerFunc = function() {
        return ("Hello " + name + ". Today is " + myLocalVar + ". And " + myGlobalVar);
    }
    */
    // using lambda expresion
    var innerFunc = function () { return ("Hello " + name + ". Today is " + myLocalVar + ". And " + myGlobalVar); };
    return innerFunc();
};
//console.log(myFunc("Adam"));
// using template string
/*
let messageFunc = function(weather) {
    let message = `It is ${weather} today`;
    console.log(message);
}

messageFunc("raining");
*/
//equal operation
/*
let first = 5;
let second = 5;

if (first == second) {
    console.log("They are the same with equal operator");
} else {
    console.log("They are not the same with equal operator");
}

if (first === second) {
    console.log("They are the same with identity operator");
} else {
    console.log("They are not the same with identify operator");
}
*/
//reduce function
/*
let products = [
    { name: "Hat", price: 24.5, stock: 10},
    { name: "Kayak", price: 289.99, stock: 1},
    { name: "Soccer Ball", price: 10, stock: 10},
    { name: "Running Shoes", price: 116.50, stock: 20}
];

let totalValue = products.filter(item => item.stock <= 1)
                        .reduce((prev, item) => prev + (item.price * item.stock), 0.01);

console.log("Total value " + totalValue);
*/
// this code will be error in TypeScript
/*
let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";

console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
*/
// define object using object literal format
/*
let myData = {
    name: "Adam",
    weather: "sunny",
    printMessage: function() {
        console.log("Hello " + myData.name + ".");
        console.log("Today is " + myData.weather + ".");
    }
};

myData.printMessage();
*/
//console.log("Hello " + myData.name + ".");
//console.log("Today is " + myData.weather + ".");
// create object by using class
var MyClass = (function () {
    function MyClass(name, weather) {
        this._name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather + ".";
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyClass.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.printMessage = function () {
        console.log("Hello " + this.name + ".");
    };
    return MyClass;
}());
//let myData = new MyClass("Adam", "sunny");
//console.log(myData.weather);
// demo for class inheritance
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        _super.call(this, name, weather);
        this._city = city;
    }
    // using override 
    MySubClass.prototype.printMessage = function () {
        _super.prototype.printMessage.call(this);
        console.log("Subclass printing..." + this._city);
    };
    return MySubClass;
}(MyClass));
//let myData = new MySubClass("Adam", "sunny", "london");
//myData.printMessage();
var name = new NameAndWeather_1.Name("Adam", "Freeman");
//let loc = new WeatherLocation("raining", "london");
console.log(name.nameMessage);
//console.log(loc.weatherMessage); 
