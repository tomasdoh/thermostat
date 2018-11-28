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
    thermostat.powerSavingOn();
    expect(thermostat.powerSaving).toBe(true);
  });

  it('power saving mode can be turned off', function(){
    thermostat.powerSavingOn()
    thermostat.powerSavingOff();
    expect(thermostat.powerSaving).toBe(false);
  });

  describe('when power saving is on:', function() {

    it('has a maximum temperature of 25 degrees', function(){
      thermostat.powerSavingOn()
      thermostat.temperature = 25
      expect(function(){ thermostat.temperatureUp(); }).toThrowError('maximum temp exceeded');
    });
  });


});
