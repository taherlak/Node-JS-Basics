//
//
// const request = require('request');
// var geoCodeAddress = (address, callback) => {
//   request({
//     url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address),
//     json: true
//   },(error, response, body) => {
//     //console.log(JSON.stringify(body,undefined,2));
//     if(error){
//       callback('Error occured while fetching data');
//     }else if(body.status=== 'OK' ){
//       callback(undefined,{
//         Address : body.results[0].formatted_address,
//         Latitude : body.results[0].geometry.location.lat,
//         Longitude : body.results[0].geometry.location.lng
//       });
//     }else if(body.status === 'ZERO_RESULTS'){
//       callback('No results found');
//     }
//     //console.log(JSON.stringify(body,undefined,2));
//   });
//
// };
//
//
// module.exports = {
//   geoCodeAddress
// };

const request = require('request');


var geoCodeAddress = (address) => {
  new Promise((resolve,reject)=>{
    request({
      url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address),
      json: true
    },(error, response, body) => {
      //console.log(JSON.stringify(body,undefined,2));
      if(error){
        reject('Error occured while fetching data');
      }else if(body.status=== 'OK' ){
        resolve(undefined,{
          Address : body.results[0].formatted_address,
          Latitude : body.results[0].geometry.location.lat,
          Longitude : body.results[0].geometry.location.lng
        });
      }else if(body.status === 'ZERO_RESULTS'){
        reject('No results found');
      }
      //console.log(JSON.stringify(body,undefined,2));
    });
  })
};
