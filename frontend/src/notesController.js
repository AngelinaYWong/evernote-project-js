class NotesController {
  //controls notes
  //defines the methods to manipulate the DOM with Notes

  renderNotesList(jsonObj){
    // what do we need to add the notes to notes list
    //dom manipulate
    console.log(jsonObj);
    const notesList = document.querySelector('#note-list')

    jsonObj.forEach((noteObj) => {
      const newNote = new Note(noteObj)
      notesList.innerHTML += newNote.noteList()
    })
  }

  renderNote(obj){
    // execute the render of note on DOM
    console.log('rendering note '+ obj)
    const main = document.querySelector('#main')
    const newNote = new Note(obj)

    main.innerHTML = newNote.note()
  }



}
