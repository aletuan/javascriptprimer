"use strict";
// each file is a module
// using export to expose which variable or class can be used outside world
var Name = (function () {
    function Name(first, second) {
        this._first = first;
        this._second = second;
    }
    Object.defineProperty(Name.prototype, "nameMessage", {
        get: function () {
            return "Hello " + this._first + " " + this._second + ".";
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
var WeatherLocation = (function () {
    function WeatherLocation(weather, location) {
        this._weather = weather;
        this._location = location;
    }
    Object.defineProperty(WeatherLocation.prototype, "weatherMessage", {
        get: function () {
            return "It is " + this._weather + " in " + this._location + ".";
        },
        enumerable: true,
        configurable: true
    });
    return WeatherLocation;
}());
exports.WeatherLocation = WeatherLocation;
