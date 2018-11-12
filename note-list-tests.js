(function listIncludesAllNotes(){
  var list = new List()
  var note = new Note('this is a note')

  list.store(note)

  assert.isTrue(list.all[0].text === "this is a note")
})(this);

(function createsAndStoresNotes(){
  var list = new List()

  list.newNote('This is a new note')

  assert.isTrue(list.all[0].text === 'This is a new note')
})(this);
