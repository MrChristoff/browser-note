(function(exports) {
  function NoteListView (){
  }

  NoteListView.prototype.returnsHTML = function(noteList) {
    var arrayOfNotes = noteList.returnArrayOfNotes();
    for (var i = 0; i < arrayOfNotes.length; i++ ) {
      arrayOfNotes[i] = "<li><div>" + arrayOfNotes[i] + "</div></li>";
    }
    var str = arrayOfNotes.join("");
    return "<ul>" + str + "</ul>";
  };


  exports.NoteListView = NoteListView;
})(this);
