function Listview(list){
  list = list.all

  this.render = function() {
    var output = "<ul>"
    list.forEach(function(note){
      output =  output + "<li><div>" + note.text + "</div></li>"
    })
    return output + "</ul>"
  }
}
