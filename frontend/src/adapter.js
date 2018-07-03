class Adapter {
  getNotes() {
    const baseURL = 'http://localhost:3000/api/v1/notes/'
    return fetch(baseURL)
      .then(r => r.json())
  }

  // renderNotes() {
  //
  // }
}
