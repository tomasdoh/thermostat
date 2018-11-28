'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

// Thermostat starts at 20 degrees
  it('has a default temperature of 20 degrees', function(){
    expect(thermostat._DEFAULTTEMP).toEqual(20);
  });

});
