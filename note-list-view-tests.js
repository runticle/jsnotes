(function listsANoteInHtml(){
  var list = new List
  list.newNote("New Note!")
  var listview = new Listview(list)
  assert.isTrue(listview.render() === "<ul><li><div>New Note!</div></li></ul>")

})(this);

(function listsTwoNotesInHtml(){
  var list = new List
  list.newNote("New Note!")
  list.newNote("Second Note!")
  var listview = new Listview(list)
  assert.isTrue(listview.render() === "<ul><li><div>New Note!</div></li><li><div>Second Note!</div></li></ul>")

})(this);
