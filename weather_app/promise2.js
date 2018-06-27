const request = require('request');

var geoCodeAddress = (address) => {
  return new Promise((resolve,reject)=>{
    request({
      url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address),
      json: true
    },(error, response, body) => {
      //console.log(JSON.stringify(body,undefined,2));
      if(error){
        reject('Error occured while fetching data');
      }else if(body.status === 'ZERO_RESULTS'){
        reject('No results found');
      }else if(body.status=== 'OK' ){
        resolve({
          Address : body.results[0].formatted_address,
          Latitude : body.results[0].geometry.location.lat,
          Longitude : body.results[0].geometry.location.lng
        });
      }
      //console.log(JSON.stringify(body,undefined,2));
    });
  });
};

geoCodeAddress('Kondhwa Pune').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
  console.log(errorMessage);
});
