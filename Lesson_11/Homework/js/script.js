/*
Разработайте страницу "Текстовый редактор". На странице должно быть размещено поле ввода и кнопка "Сохранить" (фактического
сохранения данных из поля ввода делать не надо). Если пользователь пытается закрыть окно браузера не "сохранив" данные
в поле ввода, должно запускаться окно, которое потребует подтверждения операции закрытия окна.
*/


// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg), submit = getSelector('input[type="submit"]'),
	textEditor = getSelector('input#text__editor');
let textEditorValueInMemory = 0;
submit.addEventListener('click', () => {
	if (textEditor.value.length !== 0) {
		textEditorValueInMemory = textEditor.value;
		console.log(`Value in memory: ${textEditorValueInMemory}`);
		textEditor.value = '';

	}

});
window.onbeforeunload = function () {
	if (textEditor.value.length !== 0) {
		return 'text';
	}
	return;
};
/* 
Создайте страницу с несколькими блоками текста. Реализуйте обработчик событий таким образом, чтобы при нажатии на r -текст
становился красного текста, кнопка g сделает цвет текста зеленым, а b - синим
*/

window.addEventListener('keyup', (e) => {
	const [...textBlocks] = document.querySelectorAll('.task2 > div');
	if (e.code === 'KeyR') {
		textBlocks.forEach(el => el.style.color = 'red');
	} else if (e.code === 'KeyG') {
		textBlocks.forEach(el => el.style.color = 'green');
	} else if (e.code === 'KeyB') {
		textBlocks.forEach(el => el.style.color = 'blue');
	}
	return;

});

/*
Сделайте кнопку с надписью "Получить скидку". При наведении кнопка должна убегать от курсора не давая пользователю нажать себя
*/
const discount = getSelector('.discount'), discContainer = getSelector('.discount__container'),
	right = window.screen.width - discContainer.offsetWidth, bottom = window.screen.height - discContainer.offsetHeight;
discContainer.addEventListener('mouseover', () => {
	console.log(bottom, right);
	discContainer.style.bottom = `${getRandomInt(bottom - 140)}px`;
	discContainer.style.right = `${getRandomInt(right)}px`;
});
discount.addEventListener('click', () => {
	alert('Перемога!');

});

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
/*
Разработайте страницу, которая булет выводить сообщение "сохранить" при нажатии на клавиши Ctrl + S,
"выбрано всё" при нажатии Ctrl + A, и "сохранено всё" при нажатии на комбинацию Ctrl + Shift + S.
*/
document.addEventListener('keydown', (e) => {
	if (e.ctrlKey && e.shiftKey && e.code === 'KeyS') {
		e.preventDefault();
		alert('Сохранено всё');
	} else if (e.ctrlKey && e.code === 'KeyS') {
		e.preventDefault();
		confirm('Сохранить?');
	} else if (e.ctrlKey && e.code === 'KeyA') {
		e.preventDefault();
		alert('Выбрано всё');
	}
	return;
});