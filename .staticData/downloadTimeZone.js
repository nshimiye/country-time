/**
* Get [ countryCode: timeZone ] pair from momentjs repository
* @Author: mars
* @Date:   2016-12-17T22:31:31-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-17T22:57:44-05:00
*/



(function(){
  'use strict';
  let momentDataUrl = 'https://raw.githubusercontent.com/moment/moment-timezone/develop/data/meta/latest.json';

  require('request')(momentDataUrl, function(error, response, body){

    if (!error) {
      // let timeZones = Object.keys(JSON.parse(body).zones);
      let countries = JSON.parse(body).countries;
      let countryCodeList = Object.keys(countries);
      console.log(countries[countryCodeList[0]], error);

      let fs = require('fs');
      fs.writeFile('./timeZoneData.json', 
        `[
  ${countryCodeList.map(cd => {

            return `{
    "name": "${countries[cd].name}",
    "code": "${countries[cd].abbr}",
    "zones": [${countries[cd].zones.map(z => `"${z}"`).join(',')}]
  }`
            ;

            }).join(',\n\t')}
         ]`, 
        function (err) {
        if (err) { return console.log(err); }
        console.log('timezones added timeZoneData.json');
      });

    }

  });
})();
