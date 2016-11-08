(function(exports){
  function NoteList(){
    this.noteArray = [];
  };

  NoteList.prototype.notePrinter = function () {
    return this.noteArray;
  };

  NoteList.prototype.storeNote = function(text, noteCstr) {
    noteCstr = noteCstr || Note
    this.noteArray.push(new Note(text));
  };

  NoteList.prototype.returnArrayOfNotes = function () {
    var stringArr = []
    this.noteArray.forEach(function(element){
      stringArr.push(element.text);
    });
    return stringArr;
    // console.log(stringArr);
  };

  exports.NoteList = NoteList;
})(this);
