const key = apiInfo.SECRET_KEY
const displaySection = document.querySelector('.display-section')

function formatBookList(obj) {
  const OldTestament = obj["The_Old_Testament"].split('. ').filter( book => book.length > 2)
  const NewTestament = obj["The_New_Testament"].split('. ').filter( book => book.length > 2)

  displaySection.innerHTML = [...OldTestament, ...NewTestament]

  return
}

function formatVerse({ "Book":book, "Chapter":chapter, "Verse":verse, "Output":text }) {
  return displaySection.innerHTML = (
    `<h1>${book} ${chapter}:${verse}</h1>
    <p>${text}</p>`
  )
}

function submitForm() {
  let book = document.querySelector("#book").value
  let chapter = document.querySelector("#chapter").value
  let verse = document.querySelector("#verse").value

  return getVerseOfBook(book, chapter, verse)
}

function getVerseOfBook(book, chapter, verse) {
  const data = null
  const xhr = new XMLHttpRequest()
  xhr.withCredentials = true

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      formatVerse(JSON.parse(this.response))
    }
  });

  xhr.open('Get', `https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?Book=${book}&chapter=${chapter}&Verse=${verse}`)
  xhr.setRequestHeader('X-RapidAPI-Host', 'ajith-holy-bible.p.rapidapi.com')
  xhr.setRequestHeader('X-RapidAPI-Key', `${key}`)

  xhr.send(data)
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
