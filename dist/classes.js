"use strict";
class AirConditioner {
    constructor() {
        this.color = "White";
        this.category = "AC";
        this.Tons = 1;
        this.Company = "Walton";
        this.temperature = 20;
    }
    turnOn(name) {
        console.log(`Ac about to turning on ${name} ..`);
        console.log("Ac about to turn on.");
    }
    turnOff(name) {
        console.log(`Ac about to turning off ${name}..`);
        console.log("Ac about to turn off.");
    }
    raiseTemperature(temp) {
        console.log(`temperature raised by ${Number}`, this.temperature++);
    }
    decreaseTemperature(temp) {
        console.log(`temperature raised by ${temp} `, this.temperature--);
    }
}
let AC1 = new AirConditioner();
AC1.raiseTemperature(2);
