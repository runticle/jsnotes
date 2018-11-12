function List(){
  this.all = []


  this.store = function(note){
    this.all.push(note)
  }

  this.newNote = function(text){
    note = new Note(text)
    this.store(note)
  }

}
