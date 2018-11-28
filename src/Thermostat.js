'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUMTEMP = 10;
  this.powerSaving = false;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.temperatureUp = function() {
  this.temperature += 1;
};

Thermostat.prototype.temperatureDown = function() {
  this.temperature -= 1
  if (this.temperature < this.MINIMUMTEMP)
    { throw new Error ("minimum temp exceeded");
  };
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};
