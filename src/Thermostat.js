'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUMTEMP = 10;
  this.MAXIMUMTEMP = 32;
  this.POWERSAVEMAXIMUMTEMP = 25;
  this.powerSaving = true;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.temperatureUp = function() {
  if (this.powerSaving == true && this.temperature === this.POWERSAVEMAXIMUMTEMP)
    { throw new Error ('maximum temp exceeded');
  } else if (this.powerSaving == false && this.temperature === this.MAXIMUMTEMP)
    { throw new Error ('maximum temp exceeded');
  } else {
    this.temperature += 1;
  };
};

Thermostat.prototype.temperatureDown = function() {
  if (this.temperature === this.MINIMUMTEMP)
    { throw new Error ('minimum temp exceeded');
  } else {
    this.temperature -= 1;
  };
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature > 24) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  };
};
