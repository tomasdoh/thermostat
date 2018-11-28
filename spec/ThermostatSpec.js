'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

// Thermostat starts at 20 degrees
  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

// You can increase the temperature with an up function
  it('the temperature can be increased', function(){
    thermostat.temperatureUp();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

// You can decrease the temperature with a down function
  it('the temperature can be decreased', function(){
    thermostat.temperatureDown();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

// The minimum temperature is 10 degrees
  it('the minimum temperature is 10 degrees', function(){
    thermostat.temperature = 10
    expect(function(){ thermostat.temperatureDown(); }).toThrowError('minimum temp exceeded');
  });

// If power saving mode is on, the maximum temperature is 25 degrees
  it('power saving mode can be turned on', function(){
    thermostat.powerSavingOff()
    thermostat.powerSavingOn();
    expect(thermostat.powerSaving).toBe(true);
  });

  it('power saving mode can be turned off', function(){
    thermostat.powerSavingOff();
    expect(thermostat.powerSaving).toBe(false);
  });

// You can reset the temperature to 20 with a reset function
  it('can reset to the default temperature', function() {
    thermostat.temperatureUp()
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

// You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
  describe('when the energy usage is low', function() {

    it('returns the current energy usage', function() {
      thermostat.temperature = 17
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });
  });

  describe('when the energy usage is medium', function() {

    it('returns the current energy usage when medium', function() {
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the energy usage is high', function() {

    it('returns the current energy usage', function() {
      thermostat.temperature = 25
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });
  });

  describe('when power saving is on:', function() {

    it('has a maximum temperature of 25 degrees', function(){
      thermostat.powerSavingOn()
      thermostat.temperature = 25;
      expect(function(){ thermostat.temperatureUp(); }).toThrowError('maximum temp exceeded');
    });
  });

// If power saving mode is off, the maximum temperature is 32 degrees
  describe('when power saving is off:', function() {

    it('has a maximum temperature of 32 degrees', function(){
      thermostat.powerSavingOff()
      thermostat.temperature = 32;
      expect(function(){ thermostat.temperatureUp(); }).toThrowError('maximum temp exceeded');
    });
  });

});
