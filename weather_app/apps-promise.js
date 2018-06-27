const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');
const axios = require('axios');
var args = yargs.option(
  {
    a:{
      demand : true,
      alias : "Address",
      describe : 'Please provide address parameter.',
      string:true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodeAddress = encodeURIComponent(args.a);
var encodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeAddress;

axios.get(encodeURL).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('No results found');
  }else if (response.data.status === 'OVER_QUERY_LIMIT'){
    throw new Error('Query limit reached');
  }else{
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weather_url = 'https://api.darksky.net/forecast/5af5b0dcd0b60eb6628787db2a7f5c06/'+lat+','+lng;
    console.log('Address :'+ response.data.results[0].formatted_address + '\nLatitude : ' + lat + ' \nLongitude : ' + lng);
  }
  //console.log(JSON.stringify(response.data,undefined,2));
  return axios.get(weather_url);
}).then((response) => {
  var Temperature = response.data.currently.temperature;
  var ApparentTemp = response.data.currently.apparentTemperature;
  console.log('Temperature : ' + Temperature + '\nApparentTemp : ' + ApparentTemp);
}).catch((e) => {
if(e.code === 'ENOTFOUND'){
  console.log('Unable to connect API servers');
}else{
  console.log(e);
}
});

// geocode.geoCodeAddress(args.a, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   }else{
//     console.log(results);
//     weather.getWeather(results.Latitude,results.Longitude,(errorMessage,result) => {
//       if(errorMessage){
//         console.log(errorMessage);
//       }else{
//         console.log(result);
//       }
//     });
//   }
// });
