// setters and getters make a class's interface nicer and more official.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    set temperature(celsius) {
      this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
    get temperature() {
      return 5/9 * (this.fahrenheit -32);
    }

  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C