
const fs = require('fs');

var originalNote = {
  title : 'Some title',
  body : 'Some body'
};

var noteInsert = JSON.stringify(originalNote);
fs.writeFileSync('test.json',noteInsert);

var noteString = fs.readFileSync('test.json');
var note = JSON.parse(noteString)
console.log(note.title);
