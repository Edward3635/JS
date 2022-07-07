// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg),
	btnContainer = getSelector('.buttons__container'), display = getSelector('.display'),
	getValueAsNum = (value) => Number(value.split(',').join(''));
let valInMemory, operatorInMemory, valInMemoryCopy;

function setStrAsValue(str) {
	if (str[str.length - 1] === '.') {
		display.textContent += '.';
		return;
	}
	const [wholeNumStr, decimalStr] = str.split('.');
	if (decimalStr) {
		display.textContent = parseFloat(wholeNumStr).toLocaleString('en-US') + '.' + decimalStr;
	} else {
		display.textContent = parseFloat(wholeNumStr).toLocaleString('en-US');
	}
}
function addDecimal() {
	display.textContent = display.textContent.split(',').join('');
	if (!display.textContent.includes('.')) {
		setStrAsValue(`${display.textContent}.`);
	} else {
		return;
	}
}
function executeResult(operator) {
	if (!valInMemory) {
		if (operator != 'equal') {
			valInMemory = getValueAsNum(display.textContent);
			valInMemoryCopy = valInMemory;
			operatorInMemory = operator;
		} else {
			valInMemory = getValueAsNum(display.textContent);
			valInMemoryCopy = valInMemory;
			operatorInMemory = '';
		}
	} else {
		if (operatorInMemory === 'addition') {
			display.textContent = (valInMemory + getValueAsNum(display.textContent)).toLocaleString('en-US');
		} else if (operatorInMemory === 'subtraction') {
			display.textContent = (valInMemory - getValueAsNum(display.textContent)).toLocaleString('en-US');
		} else if (operatorInMemory === 'multiply') {
			display.textContent = (valInMemory * getValueAsNum(display.textContent)).toLocaleString('en-US');
		} else if (operatorInMemory === 'division') {
			if (display.textContent === '0') {
				display.textContent = 'error';
			} else {
				display.textContent = (valInMemory / getValueAsNum(display.textContent)).toLocaleString('en-US');
			}
		}
		operatorInMemory = operator;
		valInMemory = getValueAsNum(display.textContent);
		valInMemoryCopy = valInMemory;

	}
}
function executeOperation(operator) {
	executeResult(operator);
}
// Функція, використовується нижче для друкування результату в дисплей.
function showResult(value) {
	if (display.textContent === '0') {
		setStrAsValue(value);
	} else {
		if (!valInMemory) {
			setStrAsValue(display.textContent.split(',').join('') + value);
		} else if (valInMemory) {
			if (valInMemoryCopy === getValueAsNum(display.textContent)) {
				setStrAsValue(value);
				valInMemoryCopy = 0;
			} else {
				setStrAsValue(display.textContent.split(',').join('') + value);
			}
		}
	}
	// Автоматичний скрол вправо по мірі друкування нових чисел.
	display.scrollLeft = 9999;
}
// Функція отримання реального часу
function updateTime() {
	const hours = getSelector('.span__hour'), minutes = getSelector('.span__min');
	hours.innerHTML = new Date().getHours().toString().padStart(2, '0');
	minutes.innerHTML = new Date().getMinutes().toString().padStart(2, '0');

	setInterval(() => {
		hours.innerHTML = new Date().getHours().toString().padStart(2, '0');
		minutes.innerHTML = new Date().getMinutes().toString().padStart(2, '0');
	}, 1000);
}
updateTime();

function btnListener(e) {
	if (e.target.classList.contains('number')) {
		showResult(e.target.textContent);
	} else if (e.target.classList.contains('function')) {
		if (e.target.classList.contains('ac')) {
			setStrAsValue('0');
			valInMemory = 0;
			operatorInMemory = 0;
		} else if (e.target.classList.contains('pm')) {
			if (display.textContent !== '0') {
				display.textContent = (getValueAsNum(display.textContent) * (-1)).toLocaleString('en-US');
			}

		} else if (e.target.classList.contains('percent')) {
			display.textContent = (getValueAsNum(display.textContent) / 100).toLocaleString('en-US');


		}
	} else if (e.target.classList.contains('operator')) {
		if (e.target.classList.contains('division')) {
			executeOperation('division');
		} else if (e.target.classList.contains('multiply')) {
			executeOperation('multiply');
		} else if (e.target.classList.contains('subtraction')) {
			executeOperation('subtraction');
		} else if (e.target.classList.contains('addition')) {
			executeOperation('addition');
		} else if (e.target.classList.contains('equal')) {
			executeOperation('equal');
		}

	} else if (e.target.classList.contains('decimal')) {
		addDecimal();
	}
}
function keyboardListener(e) {
	if (e.shiftKey && e.code) {
		const arrObjects = [
			{ name: 'Equal', callFunc: () => executeOperation('addition') },
			{ name: 'Digit5', callFunc: () => display.textContent /= 100 },
			{ name: 'Digit8', callFunc: () => executeOperation('multiply') }
		];
		arrObjects.forEach(el => {
			if (e.code === el.name) {
				el.callFunc();

			}
		});

	} else if (e.code.includes('Digit')) {
		for (let i = 0; i < 10; i++) {
			let word = `Digit${i}`;
			if (e.code === word) {
				let number = e.code.match(/\d+/)[0];
				showResult(number);

			}

		}
	} else {
		const arrObjects = [
			{ name: 'Backspace', callFunc: () => { setStrAsValue('0'); valInMemory = 0; operatorInMemory = 0; } },
			{ name: 'Slash', callFunc: () => executeOperation('division') },
			{ name: 'Minus', callFunc: () => executeOperation('subtraction') },
			{ name: 'Period', callFunc: () => addDecimal() },
			{ name: 'Equal', callFunc: () => executeOperation('equal') },
			{ name: 'Enter', callFunc: () => executeOperation('equal') }
		];
		arrObjects.forEach(el => {
			if (e.code === el.name) {
				el.callFunc();
			}
		});
	}
}
alert('Клавіатура теж працює.');

addEventListener('keyup', keyboardListener);
btnContainer.addEventListener('click', btnListener);
/*
const arr = [getSelector('.number0'), getSelector('.number1'), getSelector('.number2'), getSelector('.number3'),
getSelector('.number4'), getSelector('.number5'), getSelector('.number6'), getSelector('.number7'), getSelector('.number8'),
getSelector('.number9'), getSelector('.ac'), getSelector('.pm'), getSelector('.percent'), getSelector('.division'),
getSelector('.multiply'), getSelector('.subtraction'), getSelector('.addition'), getSelector('.decimal'), getSelector('.equal')];
*/