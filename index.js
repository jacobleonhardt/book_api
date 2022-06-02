const dotenv = require('dotenv')
dotenv.config()

const apiKey = process.env.KEY

const displaySection = document.querySelector('.display-section')


function getBooks() {
  const data = null
  const xhr = new XMLHttpRequest()
  xhr.withCredentials = true

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      console.log(this.responseText)
    }
  })

  xhr.open('Get', 'https://ajith-holy-bible.p.rapidapi.com/GetBooks')
  xhr.setRequestHeader('X-RapidAPI-Host', 'ajith-holy-bible.p.rapidapi.com')
  xhr.setRequestHeader('X-RapidAPI-Key', `${apiKey}`)

  xhr.send(data)
}
