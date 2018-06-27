const request = require('request');
var getWeather = (lat,long,callback) =>{
  request({
    url:'https://api.darksky.net/forecast/5af5b0dcd0b60eb6628787db2a7f5c06/'+lat+','+long,
    json:true
  },(error,response,body) => {
    if(error){
      callback('Error in fetching temperature');
    }else if (response.statusCode === 200){
      callback(undefined,{
        Temperature : body.currently.temperature,
        ApparentTemp : body.currently.apparentTemperature
      });
    }else if(response.statusCode === 404){
      callback('No temperature found');
    }
  })
};

module.exports={
  getWeather
};
