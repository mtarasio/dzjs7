let playList = [
	{ author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
	{ author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
	{ author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
	{ author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
	{ author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
	{ author: "AC/DC", song:"BACK IN BLACK"},
	{ author: "QUEEN", song:"WE WILL ROCK YOU"},
	{ author: "METALLICA", song:"ENTER SANDMAN"}];


let playlist = document.getElementById("playlist");


for (let i = 0; i < playList.length; i++) {
	let track = playList[i];
	let li = document.createElement("li");
	li.innerText = track.author + " ------ " + track.song;
	playlist.appendChild(li); 
}


let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let closeBtn = document.getElementById("closeModal");


btn.onclick = function() {
	modal.style.display = "block";
}

closeBtn.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


let redLight = document.getElementById('redLight');
let yellowLight = document.getElementById('yellowLight');
let greenLight = document.getElementById('greenLight');
let switchButton = document.getElementById('switchButton');

let currentLight = 0;

// Функція, яка перемикає світлофор на наступний колір
function switchLight() {
  if (currentLight === 0) {
    redLight.classList.remove('red');
    yellowLight.classList.add('yellow');
    currentLight = 1;
  } else if (currentLight === 1) {
    yellowLight.classList.remove('yellow');
    greenLight.classList.add('green');
    currentLight = 2;
  } else {
    greenLight.classList.remove('green');
    redLight.classList.add('red');
    currentLight = 0;
  }
}

// Навішуємо обробник події на кнопку
switchButton.addEventListener('click', switchLight);
