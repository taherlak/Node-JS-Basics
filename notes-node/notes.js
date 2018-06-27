
var fs = require('fs');
var fetchNotes = () => {
  try{
    var readNotes = fs.readFileSync('notes.json');
    return JSON.parse(readNotes);
  }catch(e){

  }
};

var saveNotes = (obj) => {
  fs.writeFileSync('notes.json',JSON.stringify(obj))
};

var addNote = (title,body) => {
  console.log('title:' + title + 'Body:' + body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var dupNotes = notes.filter((note) => note.title === title);

  if (dupNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return true;
  } else{
    //console.log('Note already present');
    return false;
  }
};

var getAll = () => {
  console.log('Showing all list');
  var readAllNote = fetchNotes();
  return readAllNote;
};

var readNote = (title) => {
  console.log('Reading note' + title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  console.log('Removing Node' + title);
  var notes = fetchNotes();
  var removnts = notes.filter((note) => note.title !== title);
  saveNotes(removnts);

  return notes.length !== removnts.length;
};
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
