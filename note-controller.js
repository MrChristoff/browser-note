function returnList() {
  var noteList = new NoteList();
  noteList.storeNote("Harry Potter");
  noteList.storeNote("Golden Compass");

  var viewList = new NoteListView();
  var list = viewList.returnsHTML(noteList);
  return list;
}


var element = document.getElementById("app");
console.log(element);
element.innerHTML = returnList();
