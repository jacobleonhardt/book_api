const key = apiInfo.SECRET_KEY
const displaySection = document.querySelector('.display-section')

function formatBookList(obj) {
  const OldTestament = obj["The_Old_Testament"].split('. ').filter( book => book.length > 2)
  const NewTestament = obj["The_New_Testament"].split('. ').filter( book => book.length > 2)

  displaySection.innerHTML = [...OldTestament, ...NewTestament]

  return
}

function getBooks() {
  const data = null
  const xhr = new XMLHttpRequest()
  xhr.withCredentials = true

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      formatBookList(JSON.parse(this.responseText))
    }
  })

  xhr.open('Get', 'https://ajith-holy-bible.p.rapidapi.com/GetBooks')
  xhr.setRequestHeader('X-RapidAPI-Host', 'ajith-holy-bible.p.rapidapi.com')
  xhr.setRequestHeader('X-RapidAPI-Key', `${key}`)

  xhr.send(data)
}
