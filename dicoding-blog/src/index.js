import './styles/main.css';

const navToggle = document.querySelector('#nav-toggle');
const navMobileList = document.querySelector('.nav-mobile__list');
const bodyElement = document.querySelector('body');

navToggle.addEventListener('click', event => {
	navMobileList.classList.toggle('open');
	event.stopPropagation();
});

bodyElement.addEventListener('click', event => {
	navMobileList.classList.toggle('open');
	event.stopPropagation();
});
