/*
Створіть поле для введення даних у полі введення даних виведіть текст під полем 
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. 
Це поле буде служити для введення числових значень - Поведінка поля має бути такою: - При фокусі 
на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає. 
- Коли вибрано фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст:
`Поточна ціна: ${значення з поля введення}`. Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля 
введення фарбується зеленим. - При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, під полем 
виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/

// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg), mainTask = getSelector('.main__task');
mainTask.insertAdjacentHTML('afterbegin',
	'<div class="input__block"><input class ="input__price" type="number" placeholder="Price"></div>');
const inputPrice = getSelector('.input__price');
inputPrice.insertAdjacentHTML('beforebegin', '<span class="span__price"></span>');
inputPrice.addEventListener('focus', () => {
	inputPrice.classList.add('input__price-focus');
});
inputPrice.addEventListener('blur', (e) => {
	inputPrice.classList.remove('input__price-focus');
	if (inputPrice.value < 0) {
		if (!e.target.classList.contains('error')) {
			inputPrice.classList.add('error');
			e.target.insertAdjacentHTML('afterend', '<div>Please enter correct price</div>');
		}
	} else {
		if (e.target.classList.contains('error')) {
			inputPrice.classList.remove('error');
			getSelector('.input__price + div').remove();
		}
	}

});
inputPrice.addEventListener('input', (e) => {
	getSelector('.span__price').style.display = 'inline';
	getSelector('.span__price').textContent = `Поточна ціна: ${e.target.value}`;
	if (!getSelector('.btn__close')) {
		inputPrice.insertAdjacentHTML('beforebegin', '<button class="btn__close">X</button>');
		getSelector('.btn__close').addEventListener('click', (e) => {
			e.target.remove();
			getSelector('.span__price').style.display = 'none';
			inputPrice.value = '';

		});
	}
});

// Створи клас, який буде створювати користувачів з ім'ям та прізвищем. Додати до класу метод для виведення імені та прізвища.
class Human {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	print() {
		console.log(`${this.name} ${this.surname}`);
	}
}
let child = new Human('Kevin', 'Montgomery');
child.print();


// Створи список, що складається з 4 аркушів. Використовуючи js звернися до 2 li і з використанням навігації по DOM дай 1 елементу
// синій фон, а 3 червоний
const task2 = getSelector('.task2');
task2.insertAdjacentHTML('afterbegin', '<ul><li>Аркуш 1</li><li>Аркуш 2</li><li>Аркуш 3</li><li>Аркуш 4</li></ul>');
getSelector('.task2 > ul > li:nth-child(1)').style.background = 'blue';
getSelector('.task2 > ul > li:nth-child(3)').style.background = 'red';

// Створи div висотою 400 пікселів і додай на нього подію наведення мишки. При наведенні мишки виведіть текст координати,
// де знаходиться курсор мишки.
const task3 = getSelector('.task3');
task3.insertAdjacentHTML('afterbegin', '<h3>Client X/Y:</h3><div></div>');
getSelector('.task3 > h3').style.opacity = '0';
const task3Div = getSelector('.task3 > div');
task3Div.style.height = '400px';
task3Div.style.background = 'green';
task3Div.addEventListener('mousemove', (e) => {
	getSelector('.task3 > h3').style.opacity = '1';
	getSelector('.task3 > h3').textContent = `Client X/Y: ${e.clientX}, ${e.clientY}`;
});
task3Div.addEventListener('mouseout', () => {
	getSelector('.task3 > h3').style.opacity = '0';
});

// Створи кнопки 1,2,3,4 і при натисканні на кнопку виведи інформацію про те, яка кнопка була натиснута
const task4 = getSelector('.task4');
task4.insertAdjacentHTML('afterbegin', '<button>1</button><button>2</button><button>3</button><button>4</button>');
task4.addEventListener('click', (e) => {
	if (e.target.tagName != 'BUTTON') {
		return;
	}
	const [...arrValue] = document.querySelectorAll('.task4 > button');
	arrValue.forEach(el => {
		if (el.textContent === e.target.textContent) {
			alert(`Була натиснута кнопка ${el.textContent}`);

		}
	});
});
//Створи div і зроби так, щоб при наведенні на div він змінював своє положення на сторінці
const task5 = getSelector('.task5');
task5.insertAdjacentHTML('afterbegin', '<div></div>');
getSelector('.task5 > div').style.cssText =
	'height:60px; background-color: purple; max-width: 400px; margin-left:30%; transition: all 1s';

getSelector('.task5 > div').addEventListener('mouseover', (e) => {
	e.target.style.marginLeft = '50px';
});
getSelector('.task5 > div').addEventListener('mouseleave', (e) => {
	e.target.style.marginLeft = '30%';
});

// Створи поле для введення кольору, коли користувач вибере якийсь колір, зроби його фоном body
const task6 = getSelector('.task6');
task6.insertAdjacentHTML('afterbegin',
	'<label for="input__color">Оберіть колір</label><input type="color" value="#745d49" id="input__color">');
getSelector('.task6 > input').addEventListener('input', (e) => {
	document.body.style.backgroundColor = e.target.value;
});

// Створи інпут для введення логіну, коли користувач почне вводити дані в інпут виводь їх в консоль
const task7 = getSelector('.task7');
task7.insertAdjacentHTML('afterbegin',
	'<label for="input__login">Уведіть логін</label><input type="text" id="input__login">');
getSelector('.task7 > input').addEventListener('input', (e) => {
	console.log(e.target.value);
});

// Створіть поле для введення даних, виведіть текст під полем
const task8 = getSelector('.task8');
task8.insertAdjacentHTML('afterbegin',
	'<label for="input__login">Уведіть дані </label><input type="text" id="input__data"><h3></h3>');
getSelector('.task8 > input').addEventListener('input', (e) => {
	getSelector('.task8 > h3').textContent = e.target.value;
});