var takeInput = (a,b) => {
  return new Promise((resolve,reject)=> {
      if(typeof a === 'number' && typeof b=== 'number'){
        resolve(a+b);
      }else{
        reject('Types are not integers');
      }
  });
};


// var somePromise = new Promise((resolve,reject) =>{
//   setTimeout(() =>{
//     resolve('Hey It worked');
//       reject('Hey It did not work');
//   },3000);
// });
//
// somePromise.then((message) => {
//   console.log('Success : ' +message);
// },(errorMessage) => {
//   console.log('Error found :' + errorMessage);
// });

takeInput(12,24).then((message)=> {
  console.log('Sucess :'+ message);
},(errorMessage)=>{
  console.log('Error:' +errorMessage);
});
