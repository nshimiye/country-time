'use strict';
const moment = require('moment-timezone');
const timeZoneData = require('../.staticData/timeZoneData');
/**
 * 
 */
class CountryTime {

    /**
     * @param countryCode
     */
    constructor(countryCode) {

    }

    /**
     * @param countryCode
     */
    static now(countryCode, format) {
        let country = timeZoneData.find(tzd => tzd.code === countryCode);
        return moment.tz(country.zones[0]).format('DD-MM-YYYY hh:mm:ss A');
    }

}

module.exports = CountryTime;