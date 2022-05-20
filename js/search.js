import recognition from "./voice-commands.js";
import Cache from "./cache.js";
import { cleanUp, showmodal } from './utils/dom-methods.js';
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const gifArea = document.querySelector('#gif-area');
const microphone = document.querySelector('#microphone');

let searchValue = null;

search.addEventListener('change', (event) => {
	console.log(event);
	searchValue = event.target.value;
	console.log(searchValue)
});

search.addEventListener('keydown', (event) => {
	console.log(event.code);
	if (event.code === 'Enter') {
		gifArea.textContent = "";
		fetchData(searchValue);	
	}
});

searchBtn.addEventListener('click', () => {
	gifArea.textContent = "";
	fetchData(searchValue)	
});

microphone.addEventListener('click', () => {
	showmodal();
	gifArea.textContent = "";
	recognition.continuous = true;
	recognition.start();
	// fetchData(searchValue)	
});

const fetchData = (search) => {
	const apiKey = "8rZTTiActUqO6F7lE7TF3jGdcoxuuTY9"
	let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=25&offset=0&rating=g&lang=en`;

	const buildDOM = (element, index, array) => {
		if (index === array.length - 1) return;
		const wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');
		const img = document.createElement('img');
		const title = document.createElement('h3');
		const url = element.images.fixed_height.url
		img.src = url;
		console.log(element.title)
		title.textContent = element.title;
		wrapper.append(img);
		gifArea.append(wrapper)
		recognition.stop();
		// gifArea.append(title);
	}

	if (Cache().contains(search)) {
		const data = Cache().results()[search];
		data.forEach(buildDOM);
	} else {
		fetch(url, {
			credentials: "same-origin",
		}).then(
			(response) => {
				console.log(response)
				return response.json();
			}
		).then(
			(respData) => {
				console.log(respData);
				
				Cache().setInCache(search, respData.data);
				respData.data.forEach(buildDOM);
				console.log(Cache().results());
				cleanUp();
			}
		);
	}
	
};

export default fetchData;

