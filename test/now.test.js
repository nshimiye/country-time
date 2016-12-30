/**
* @Author: mars
* @Date:   2016-12-29T02:10:56-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-29T18:43:14-05:00
*/
(function(){

    'use strict';

    const CountryTime = require('../src/CountryTime');

    let nepalTime = CountryTime.now('NP');
    let rwandaTime = CountryTime.now('RW');
    let usaTime = CountryTime.now('US');

    console.log('Nepal', nepalTime);
    console.log('Rwanda', rwandaTime);
    console.log('USA', usaTime);

})();
