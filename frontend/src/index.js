// index.js
document.addEventListener("DOMContentLoaded", function() {

  const adapter = new Adapter()
  const notesController = new NotesController()



  // populates notes list
  adapter.getNotes()
    .then((jsonObj)=>notesController.renderNotesList(jsonObj))

  //show note when clicked
  document.addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      const noteId = e.target.dataset.type
      adapter.getNote(noteId)
        .then(noteObj => notesController.renderNote(noteObj))

    }
  })









});








//   const noteList = document.getElementById('note-list')
//   const noteContent = document.getElementById('main')
//   const createButton = document.getElementById('create')
//   const adapter = new Adapter()
//   adapter.getNotes()
//   adapter.renderNewForm()
//     .then(data => {
//       data.forEach((note) => {
//         let newNote = new Note(note)
//         noteList.innerHTML += newNote.el()
//       })
//     })
//
//     noteList.addEventListener('click', (e)=>{
//       console.log(e);
//       const id = e.target.dataset.id
//       adapter.getNote(id).then((data) => {
//         let newNote = new Note(data)
//         noteContent.innerHTML = newNote.contentElement()
//       })
//     })
//
//   noteContent.addEventListener('click', (e) => {
//       if(e.target.id === 'edit') {
//         adapter.getNote(e.target.parentElement.id)
//           .then((data) => {
//             const editNote = new Note(data)
//             noteContent.innerHTML += editNote.renderEditForm()
//           })
//       }
//   })
//
//   noteContent.addEventListener('click', (e) => {
//     const editForm = document.querySelector('form')
//     if(e.target.value === 'Submit') {
//       editForm.addEventListener('submit', (e) => {
//         e.preventDefault()
//         const noteTitle = e.target.children[1].value
//         const noteBody = e.target.children[5].value
//         adapter.updateNote(e.target.id, noteTitle, noteBody)
//           .then((data) => {
//             const updatedNote = new Note(data)
//             noteContent.innerHTML = updatedNote.contentElement()
//           })
//         editForm.style.display = 'none'
//       })
//     }
//   })
//
//   noteContent.addEventListener('click', (e) => {
//       if(e.target.id === 'delete') {
//         adapter.deleteNote(e.target.parentElement.id)
//           .then(e.target.parentElement.remove())
//       }
//   })
//
//   createButton.addEventListener('click', (e) => {
//     const user = adapter.getUser()
//     const newForm = document.getElementById('new')
//     // console.log(e)
//     noteContent.innerHTML += adapter.renderNewForm()
//       newForm.addEventListener('submit', (e)=>{
//         debugger
//         if(e.target.id ==='create')
//       console.log(e)
//     })
//   })
//
//
//
// });
