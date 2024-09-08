class AirConditioner {
  color = "White";
  category = "AC";
  Tons = 1;
  Company = "Walton";
  temperature = 20;

  turnOn(name: string) {
    console.log(`Ac about to turning on ${name} ..`);
    console.log("Ac about to turn on.");
  }

  turnOff(name: string) {
    console.log(`Ac about to turning off ${name}..`);
    console.log("Ac about to turn off.");
  }

  raiseTemperature(temp: number) {
    console.log(`temperature raised by ${Number}`, this.temperature++);
  }

  decreaseTemperature(temp: number) {
    console.log(`temperature raised by ${temp} `, this.temperature--);
  }
}

let AC1 = new AirConditioner();

AC1.raiseTemperature(2);
