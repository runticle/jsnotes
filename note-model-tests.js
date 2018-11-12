function testNoteHasText() {
  var note = new Note("this is a note")
  assert.isTrue(note.text === "this is a note")
}

testNoteHasText()
