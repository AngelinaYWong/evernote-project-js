document.addEventListener("DOMContentLoaded", function() {
  const noteList = document.getElementById('note-list')
  // let note = new Note(1, "this note", "note y'all")
  //
  // noteList.innerHTML += note.el()
  const adapter = new Adapter
  adapter.getNotes()
    .then(data => {
      data.forEach((note) => {
        let newNote = new Note(note)
        noteList.innerHTML += newNote.el()
      })
    })



});
