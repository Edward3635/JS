// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg), [...front] = document.querySelectorAll('.front'),
	[...ul] = document.querySelectorAll('.back > ul'), url = 'https://swapi.dev/api/people', data = fetch(url, { method: 'get' });

localStorage.content = JSON.stringify([]);

front.forEach((el, index) => {
	index++;
	el.style.backgroundImage = `url('img/${index}.jpg')`;
});

data.then(response => response.json(), err => console.error(err))
	.then(res => readArr(res.results));
function readArr(arr) {
	arr.forEach((el, index) => {
		const { name, height, skin_color, birth_year, gender, homeworld } = el;
		ul[index].insertAdjacentHTML('beforeend',
			`<li>Name: ${name} </li><li>Gender: ${gender}</li><li>Height: ${height}cm</li><li>Skin color: ${skin_color}</li>` +
			`<li>Birthday: ${birth_year}</li> <li>Homeworld: '${homeworld}'</li> <li><button class="btn__save">Save</button></li>`);
	});
	const mainCards = getSelector('.main__cards');
	mainCards.addEventListener('click', (e) => {
		if (e.target.tagName !== 'BUTTON') {
			return;
		}
		const parent = (e.target.parentElement).parentElement;
		const content = parent.textContent.substring(0, parent.textContent.length - 5);
		let contentData = JSON.parse(localStorage.content);
		contentData.push(content);
		localStorage.content = JSON.stringify(contentData);

	});
}




