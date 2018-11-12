(function listsANoteInHtml(){
  var listview = new Listview(List)

  assert.isTrue(listview.render() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")

})(this)
