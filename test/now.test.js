(function(){

    'use strict';

    const CountryTime = require('../src/CountryTime');

    let nepalTime = CountryTime.now('NP');
    let rwandaTime = CountryTime.now('RW');
    let usaTime = CountryTime.now('US');

    console.log('Nepal', nepalTime);
    console.log('Rwanda', rwandaTime);
    console.log('USA', usaTime);

});