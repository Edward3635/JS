// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = selector => document.querySelector(selector),
	btnPrepend = getSelector('.btn__prepend'), btnCircle = getSelector('.btn__circle');
// Лічильники
let divCounter = 0, circleCounter = 0;

// Classwork
// Масив об'єктів
const data = [
	{ 'baseCurrency': 'UAH', 'currency': 'CAD', 'saleRateNB': 13.2107400, 'purchaseRateNB': 13.2107400, 'saleRate': 15.0000000, 'purchaseRate': 13.0000000 },
	{ 'baseCurrency': 'UAH', 'currency': 'CZK', 'saleRateNB': 0.6796950, 'purchaseRateNB': 0.6796950, 'saleRate': 0.8000000, 'purchaseRate': 0.6000000 },
	{ 'baseCurrency': 'UAH', 'currency': 'ILS', 'saleRateNB': 3.8627380, 'purchaseRateNB': 3.8627380, 'saleRate': 4.5000000, 'purchaseRate': 3.7000000 },
	{ 'baseCurrency': 'UAH', 'currency': 'JPY', 'saleRateNB': 0.1272593, 'purchaseRateNB': 0.1272593, 'saleRate': 0.1500000, 'purchaseRate': 0.1200000 },
	{ 'baseCurrency': 'UAH', 'currency': 'NOK', 'saleRateNB': 2.1609570, 'purchaseRateNB': 2.1609570, 'saleRate': 2.6000000, 'purchaseRate': 2.1000000 },
	{ 'baseCurrency': 'UAH', 'currency': 'CHF', 'saleRateNB': 15.6389750, 'purchaseRateNB': 15.6389750, 'saleRate': 17.0000000, 'purchaseRate': 15.5000000 },
	{ 'baseCurrency': 'UAH', 'currency': 'RUB', 'saleRateNB': 0.3052700, 'purchaseRateNB': 0.3052700, 'saleRate': 0.3200000, 'purchaseRate': 0.2800000 },
	{ 'baseCurrency': 'UAH', 'currency': 'GBP', 'saleRateNB': 23.6324910, 'purchaseRateNB': 23.6324910, 'saleRate': 25.8000000, 'purchaseRate': 24.0000000 },
	{ 'baseCurrency': 'UAH', 'currency': 'USD', 'saleRateNB': 15.0564130, 'purchaseRateNB': 15.0564130, 'saleRate': 15.7000000, 'purchaseRate': 15.3500000 },
	{ 'baseCurrency': 'UAH', 'currency': 'EUR', 'saleRateNB': 18.7949200, 'purchaseRateNB': 18.7949200, 'saleRate': 20.0000000, 'purchaseRate': 19.2000000 },
	{ 'baseCurrency': 'UAH', 'currency': 'PLZ', 'saleRateNB': 4.4922010, 'purchaseRateNB': 4.4922010, 'saleRate': 5.0000000, 'purchaseRate': 4.2000000 }];

const rootId = getSelector('#root');
rootId.innerHTML += '<table><caption>Курс Валюти</caption>' +
	'<thead><tr><th>Валюта</th><th>Покупка</th><th>Продажа</th></tr></thead><tbody></tbody></table>';

// Перебір елементів масиву, і знаходимо необхідні дані
// А також виклик функції виводу
data.forEach(item => {
	let text = [item.currency, item.saleRate.toFixed(2), item.purchaseRate.toFixed(2)];
	output(text);

});

// Функція виводу даних в таблицю
function output(arg) {
	const rootId = getSelector('tbody');
	rootId.innerHTML += `<tr><td>${arg[0]}</td><td>${arg[1]}</td><td>${arg[2]}</td></tr>`;
}


//Homework
// Відслідковуємо клік на кнопку і викликаємо функцію
btnCircle.onclick = showInputCircle;
function showInputCircle() {
	// true та false необхідні для зміни відображення кнопки, вона "подвійна"
	if (circleCounter == false) {
		// Коли false - показуємо input
		const neighbor = getSelector('.btn__circle'),
			showInput = document.createElement('div');
		showInput.classList.add('input__diameter');
		neighbor.innerHTML = 'Намалювати';
		showInput.innerHTML = '<input class="circle__input" type="number" placeholder="Діаметр круга(px)">';
		neighbor.before(showInput);
		circleCounter++;
	} else {
		const circleInputValue = getSelector('.circle__input').value;
		// Перевірка вводу регулярним виразом
		if (circleInputValue.replace(/\D/, '')) {
			const neighbor = getSelector('.btn__circle');
			neighbor.previousElementSibling.remove();
			neighbor.innerHTML = 'Намалювати круг';
			circleCounter--;
			drawCircle(circleInputValue);
		} else {
			alert('Треба ввести діаметр кола! (Цифрами)');

		}
	}
}
// Функція малювання кругів із значенням діаметру, взятим із input різними кольорами
function drawCircle(diameter) {
	const neighbor = getSelector('#root'),
		ul = document.createElement('ul');
	ul.classList.add('ul__circle');
	neighbor.after(ul);
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			const parent = getSelector('.ul__circle'),
				li = document.createElement('li');
			li.classList.add('li__circle');
			parent.append(li);
			li.style.width = `${diameter}px`;
			li.style.height = `${diameter}px`;
			li.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		}

	}
	alert('Результат знизу.');
	deleteCircle();


}
// Видалення певного круга на клік
function deleteCircle() {
	let ul = getSelector('.ul__circle'),
		liCounter = 0;
	// Слікування за подією
	function circleListener(e) {
		let target = e.target.closest('.li__circle');
		// Якщо клік не по кругу - подія ігнорується
		if (!target) return;
		// видалення круга, який натиснули
		ul.removeChild(e.target);
		// за кожний видалений круг збільшуємо каунтер
		liCounter++;
		// Коли каунтер = 100, видаляємо пустий список та EventListener, обнуляємо каунтер.
		if (liCounter === 100) {
			ul.remove();
			ul.removeEventListener('click', circleListener);
			liCounter = 0;
		}
	}
	ul.addEventListener('click', circleListener);
}
/*
Додаткова задача
Створіть сторінку з кнопкою. При натисканні на кнопку, на сторінці створюється div з довільним текстом.
Після створення 10 div усі вони повинні видалитись.
*/
// Масив слів, які будуть виводитись у випадковому порядку
const words = ['feign', 'appointment', 'attract', 'expectation', 'bitter', 'soil', 'expenditure', 'obscure',
	'warning', 'formal', 'roll', 'chimney', 'waterfall', 'funny', 'fur', 'opposite', 'excitement', 'depressed', 'outlook'];

// При натисканні на кнопку = виконання функції
btnPrepend.onclick = prependDiv;

// Функція на додавання блоків <div>
function prependDiv() {
	if (divCounter < 10) {
		const divs = getSelector('.created__blocks'),
			div = document.createElement('div');
		// алгоритм вибору слова з масиву через random
		div.innerHTML = words[Math.floor(Math.random() * words.length)];
		divs.prepend(div);
		divCounter++;
	} else {
		// Коли кількість > 10  то видаляємо все
		const div = document.querySelector('.created__blocks');

		while (div.firstElementChild) {
			div.firstElementChild.remove();

		}
		divCounter = 0;

	}
}


