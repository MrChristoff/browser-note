
(function(exports){
  function Note(text){
    this.text = text
    var AM_I_HIDDEN = true
  };

  Note.prototype.textReturn = function () {
    return this.text
  };
  Note.prototype.returnHidden = function () {
    console.log(AM_I_HIDDEN)
  };

  exports.Note = Note;
})(this);
