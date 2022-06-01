const apiKey = process.env.KEY

const displaySection = document.querySelector('.display-section')

const data = null

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://ajith-holy-bible.p.rapidapi.com/GetBooks");
xhr.setRequestHeader("X-RapidAPI-Host", "ajith-holy-bible.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "3930eb67bdmshbd8e623113ff02fp19c25bjsn71dfb42a64cd");

xhr.send(data);
