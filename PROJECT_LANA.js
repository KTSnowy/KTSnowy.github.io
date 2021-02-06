const button = document.querySelector(".LANA");
const reply = document.querySelector(".LANA-REPLY");

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("Hey it's me Lana :3");
  reply.textContent = "{ Hey it's me Lana :3 }"
};

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  console.log(transcript);
  if (transcript.includes('Hey Lana')) {
    reply.textContent = `{ Hey it's me :3 }`;
  }
  if (transcript.includes('Lana how are you')) {
    reply.textContent = `{ I'm alright, thanks for asking :3 }`;
  }
  if (transcript.includes("Lana what are you")) {
    reply.textContent = `{ I'm a protogen ~w~ }`;
  }
  //lanaRead(transcript);
};

button.addEventListener('click', () => {
  recognition.start();
});

/*
function lanaRead(message){
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
*/