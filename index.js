const key = apiInfo.SECRET_KEY
const displaySection = document.querySelector('.display-section')

function formatBookList(obj) {
  const getOldTestament = obj["The_Old_Testament"].split('. ')
  const getNewTestament = obj["The_New_Testament"].split('. ')

  const list = [...getOldTestament, ...getNewTestament]

  displaySection.innerHTML = list

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
