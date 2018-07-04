const baseURL = 'http://localhost:3000/api/v1/notes/';

class Adapter {
  getNotes() {
    return fetch(baseURL)
      .then(r => r.json())
  }

  getNote(id){
    return fetch(baseURL + id)
      .then(r => r.json())
  }

  deleteNote(note_id) {
    const options = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(note_id)
  }
  return fetch(baseURL+note_id, options)
  }

  updateNote(note_id, note_title, note_body) {
    // user title body
    const editNote = {id: note_id, title: note_title, body: note_body}
    const options = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(editNote)
  }
  console.log(baseURL+note_id)
  return fetch(baseURL+note_id, options)
    .then(response => response.json())
  }

  createNote(note){
    // const baseURL = 'http://localhost:3000/api/v1/notes'
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  }
  return fetch(baseURL+note_id, options)
  }


  renderNewForm() {
    return `<form id='new' action="" method="">
      <label>Title</label>
      <input type="text" placeholder="Title"></input><br><br>
      <label>Body</label>
      <textarea placeholder="Body"></textarea>
      <input type='submit' value='Submit'></input>
    </form>`
  }

  getUser(){
    return fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
  }



}
