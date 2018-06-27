console.log('Started running');

setTimeout (() => {
  console.log("Inside of callback");
},3000);
setTimeout (() => {
  console.log("Inside of callback 2");
},0);

console.log('End');
