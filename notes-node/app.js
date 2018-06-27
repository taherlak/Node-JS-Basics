const fs = require('fs');
const notes = require('./notes.js')
const lo = require('lodash')
const yargs = require('yargs');

var command = process.argv[2];
const titleOption = {
  describe : 'Title of note',
  demand : true,
  alias : 't'
};
const bodyOption = {
  describe : 'Body of the note',
  demand : true,
  alias : 'b'
};
var args = yargs
  .command('add','Add a note', {
    title:titleOption,
    body:bodyOption

  })
  .command('list','List all the notes',{})
  .command('read','Read a note',{
    title:titleOption
  })
  .command('remove','Remove a note',{
    title:titleOption
  })
  .help()
  .argv;
//console.log(yargs.argv);
//console.log(process.argv);
if(command === 'add'){
  console.log('Adding Notes');
  var isAdd = notes.addNote(args.title,args.body)

  if(isAdd === true){
    console.log("Notes added");
  }else{
    console.log('Notes already present');
  }
}else if(command === 'list'){
  console.log('Listing Notes');
  var isList = notes.getAll();
  debugger;
  console.log(isList);
}else if(command === 'read'){
  console.log('Reading Notes');
  var isRead = notes.readNote(args.title);
  if(isRead){
    console.log('Node found');
    console.log('__');
    console.log('Title: ' + isRead.title);
    console.log('Body: ' + isRead.body);
  }else{
    console.log('Couldnt read title');
  }
}else if(command === 'remove'){
  console.log('Removing Notes');
  var isRemove = notes.removeNote(args.title);
  if(isRemove === true){
    console.log('Note removed');
  }else{
    console.log('Node not found');
  }
}else{
  console.log('Command not found');
}
