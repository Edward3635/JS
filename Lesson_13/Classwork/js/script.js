// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg), xhr = new XMLHttpRequest(),
	btnCurrency = getSelector('.btn__currency');

function getCorrectResponse() {
	if (xhr.readyState !== 4 || xhr.status !== 200) {
		return;
	}
	const response = xhr.response;
	showCurrency(JSON.parse(response));
}
function showCurrency(arr) {
	const gridCurrency = getSelector('.grid__currency');
	arr.forEach(el => {
		const { txt, rate } = el;
		gridCurrency.insertAdjacentHTML('beforeend', `<div>${txt}</div><div>${rate}</div>`);
	});
	gridCurrency.style.border = '2px solid gray';
}
btnCurrency.addEventListener('click', (e) => {
	const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
	xhr.open('GET', url);
	xhr.onreadystatechange = getCorrectResponse;
	xhr.send();
	e.target.remove();
});