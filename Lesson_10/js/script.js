// Оголошення змінних та стрілкових функцій.
const getSelector = arg => document.querySelector(arg),
	btnContainer = getSelector('.buttons__container'), display = getSelector('.display'),
	getValueAsStr = () => display.textContent.split('.').join(''),
	getValueAsNum = () => parseFloat(getValueAsStr());

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
// Функція, використовується нижче для друкування результату в дисплей.
function showResult(value) {
	if (display.textContent === '0') {
		setStrAsValue(value);
	} else {
		setStrAsValue(display.textContent.split(',').join('') +
			value);
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
		} else if (e.target.classList.contains('pm')) {
			if (e.target.textContent != 0) {
				let res = e.target.textContent * -1;
				display.textContent = res;
			}

		} else if (e.target.classList.contains('percent')) {
			alert('%');

		}
	} else if (e.target.classList.contains('operator')) {
		alert('%');

	} else if (e.target.classList.contains('decimal')) {
		display.textContent = display.textContent.split(',').join('');
		if (!display.textContent.includes('.')) {
			setStrAsValue(`${display.textContent}.`);
		} else {
			return;
		}
	}
}
function keyboardListener(e) {
	//alert(e.code);
	if (e.shiftKey && e.code) {
		const arr = ['Backspace', 'Slash', 'Minus', 'Enter', 'Period', 'Equal', 'Digit8', 'Digit5'];
		arr.forEach(el => {
			if (e.shiftKey && e.code == el) {
				alert('Wohoo');

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
	}
}
addEventListener('keyup', keyboardListener);
btnContainer.addEventListener('click', btnListener);
/*
const arr = [getSelector('.number0'), getSelector('.number1'), getSelector('.number2'), getSelector('.number3'),
getSelector('.number4'), getSelector('.number5'), getSelector('.number6'), getSelector('.number7'), getSelector('.number8'),
getSelector('.number9'), getSelector('.ac'), getSelector('.pm'), getSelector('.percent'), getSelector('.division'),
getSelector('.multiply'), getSelector('.subtraction'), getSelector('.addition'), getSelector('.decimal'), getSelector('.equal')];
*/
