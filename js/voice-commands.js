import fetchData from './search.js';


let recognition = new window.webkitSpeechRecognition();
let recognitionList = new window.webkitSpeechGrammarList();

// recognition.continuous = true;
// recognition.start();


const speechCapturer = (e) => {
  // There should be a regex being used on each item from the results array.

  // If the word is contained in the latest position of the results array. The user gets a point and the UI responds accordingly.
  // const msg = e[0][0].transcript;
  let msg = e.results[e.results.length - 1][0].transcript.trim();
	console.log(msg)
	fetchData(msg);
	recognition.stop();
  // const regex = new RegExp(servedWord, "gi");
  // console.log("result: ", regex.test(msg), msg, regex);
  // console.log(servedWord, servedWord.rhymesWith);
  // servedWord.rhymesWith.forEach((item) => {
  //   console.log(item);
  // if (item === msg) {
  //   console.log("made it");
  //   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   card.style.backgroundColor = `#${randomColor}`;
  //   console.log(msg);
  // }
  // }
  // );
};

recognition.addEventListener("result", speechCapturer);
export default recognition;