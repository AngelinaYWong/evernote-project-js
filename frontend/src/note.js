class Note {
  constructor(note){
    this.title = note.title
    this.body = note.body
    this.id = note.id
    this.userId = note.userId
  }

  noteList() {
    return `<li data-type="${this.id}" >${this.title}</li>`
  }

  note(){
    return`
      <h3>${this.title}</h3>
      <p>${this.body}</p>
    `
  }

}























































// constructor({id, user, title, body}) {
//     this.id = id
//     this.user = user
//     this.title = title
//     this.body = body
//   }
//
//   el() {
//     return `<li data-id=${this.id}>${this.title}</li>`
//   }
//
//   contentElement() {
//     return `<div id=${this.id}><h3>${this.title}</h3><p>${this.body}</p><button id='edit'>Edit</button><button id='delete'>Delete</button></div>`
//   }
//
//   renderEditForm() {
//     return `<form id=${this.id} action="" method="">
//       <label>Title</label>
//       <input type="text" value=${this.title}></input><br><br>
//       <label>Body</label>
//       <textarea>${this.body}</textarea>
//       <input type='submit' value='Submit'></input>
//     </form>`
//   }
//
//
// }
