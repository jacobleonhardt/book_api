const dotenv = require('dotenv')
dotenv.config()

const apiKey = process.env.KEY


function getBooks() {
  const displaySection = document.querySelector('.display-section')
  const data = null
  const xhr = new XMLHttpRequest()
  xhr.withCredentials = true

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      displaySection.innerHTML = this.responseText
    }
  })

  xhr.open('Get', 'https://ajith-holy-bible.p.rapidapi.com/GetBooks')
  xhr.setRequestHeader('X-RapidAPI-Host', 'ajith-holy-bible.p.rapidapi.com')
  xhr.setRequestHeader('X-RapidAPI-Key', `${apiKey}`)

  xhr.send(data)
}
