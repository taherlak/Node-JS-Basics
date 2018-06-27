const yargs = require('yargs');
const geocode = require('./geocode')
const weather = require('./weather')
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

geocode.geoCodeAddress(args.a, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results);
    weather.getWeather(results.Latitude,results.Longitude,(errorMessage,result) => {
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(result);
      }
    });
  }
});
console.log(args);
