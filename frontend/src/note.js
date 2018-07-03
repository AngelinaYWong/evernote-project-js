class Note {
  constructor({id, user, title, body}) {
    this.id = id
    this.user = user
    this.title = title
    this.body = body
  }

  el() {
    return `<li data-id=${this.id}>${this.title}</li>`
  }
}
