const modal = document.querySelector('#modal');
const body = document.querySelector('body');
const main = document.querySelector('div.search-container');
const nav = document.querySelector('nav');
const sectionMain = document.querySelector('section.main');

export const showmodal = () => {
	modal.style.visibility = 'visible';
	modal.style.display = 'flex';
	main.style.visibility = 'hidden';
	nav.style.visibility = 'hidden';
	sectionMain.style.visibility = 'hidden';
	body.classList.add('modal-applied')
}

export const cleanUp = (elementList) => {
	modal.style.visibility = 'hidden';
	modal.style.display = 'none';
	main.style.visibility = 'visible';
	nav.style.visibility = 'visible';
	sectionMain.style.visibility = 'visible';
	body.classList.remove('modal-applied')
}

modal.addEventListener('click', (e) => {
	modal.style.visibility = 'hidden';
	main.style.visibility = 'visible';
	nav.style.visibility = 'visible';
	body.classList.remove('modal-applied')
})

