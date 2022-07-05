const getSelector = arg => document.querySelector(arg),
	btnContainer = getSelector('.buttons__container'), display = getSelector('.display'),
	getValueAsStr = () => display.textContent.split('.').join(''),
	getValueAsNum = () => parseFloat(getValueAsStr()),
	setStrAsValue = (str) => {
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
	};

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
		if (display.textContent === '0') {
			setStrAsValue(e.target.textContent);
		} else {
			setStrAsValue(display.textContent.split(',').join('') +
				e.target.textContent);
		}
	} else if (e.target.classList.contains('function')) {
		if (e.target.classList.contains('ac')) {
			setStrAsValue('0');
		} else if (e.target.classList.contains('pm')) {
			alert(!!-1);

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
	alert(e.code);

	if (e.code === 'Digit0' || e.code === 'Digit1') {
		let number = e.code.match(/(\d+)/);
		alert(Number(number));

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
