function storesTextOnCreation(){
  var note = new Note("text")

  if (note.textReturn() != "text") {
    throw "False"
  } else {
    console.log("storesTextOnCreation")
    }
  };

function noteListStoresNote() {
  var noteList = new NoteList();
  noteList.notePrinter();
  noteList.storeNote("test text")

  if (!noteList.noteArray[0] instanceof Note) {
    throw "False"
  } else {
    console.log("noteListStoresNote")
    }
};

function noteListPrintsNotes() {
  var noteList = new NoteList();
  noteList.storeNote("harry potter");
  if (noteList.notePrinter() == noteList.noteArray) {
    console.log("noteListPrintsNotes")
  } else {
    throw "False!"
  }
};

function returnsArrayOfNoteText() {
  var noteList = new NoteList();
  noteList.storeNote("Harry Potter");
  noteList.storeNote("Golden Compass");
  var arr = noteList.returnArrayOfNotes()
  if (arr.includes("Harry Potter") && arr.includes("Golden Compass")) {
    console.log("returnsArrayOfNoteText")
  } else {
    throw "False!"
  }
};

function returnsHTML () {
  var noteList = new NoteList();
  noteList.storeNote("Harry Potter");
  noteList.storeNote("Golden Compass");
  var view = new NoteListView(noteList);
  var listFormat = "<ul><li><div>Harry Potter</div></li><li><div>Golden Compass</div></li></ul>"

  if (view.returnsHTML(noteList) === listFormat ) {
    console.log("returnsHTML")
  } else {
    throw "False!"
  }
};

storesTextOnCreation();
noteListStoresNote();
noteListPrintsNotes();
returnsArrayOfNoteText();
returnsHTML();
