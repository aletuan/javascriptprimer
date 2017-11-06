// each file is a module
// using export to expose which variable or class can be used outside world
export class Name {
    _first: string;
    _second: string;

    constructor(first: string, second: string) {
        this._first = first;
        this._second = second;
    }

    get nameMessage() {
        return `Hello ${this._first} ${this._second}.`;
    }
}

export class WeatherLocation {
    _weather: string;
    _location: string;

    constructor(weather: string, location: string) {
        this._weather = weather;
        this._location = location;
    }

    get weatherMessage() {
        return `It is ${this._weather} in ${this._location}.`;
    }
}