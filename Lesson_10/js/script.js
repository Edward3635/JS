const getSelector = arg => document.querySelector(arg),
	btnContainer = getSelector('.buttons__container'), display = getSelector('.display');

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
const getValueAsStr = () => display.textContent.split('.').join(''),
	getValueAsNum = () => parseFloat(getValueAsStr()),
	setStrAsValue = (str) => {
		if (str[str.length - 1] === '.') {
			display.textContent += '.';
			return;
		}
		const [wholeNumStr, decimalStr] = str.split('.');
		if (str) {
			display.textContent = `${parseFloat(wholeNumStr).toLocaleString()}.${decimalStr}`;
		} else {
			display.textContent = parseFloat(wholeNumStr).toLocaleString();
		}
	};
function btnListener(e) {
	if (e.target.classList.contains('number')) {
		if (display.textContent === '0') {
			display.textContent = e.target.textContent;
		} else {
			display.textContent = parseFloat(display.textContent.split(',').join('') +
				e.target.textContent).toLocaleString('en-US');
		}
	} else if (e.target.classList.contains('function')) {
		if (e.target.classList.contains('ac')) {
			setStrAsValue('0');
			//display.textContent = '0';

		}
	} else if (e.target.classList.contains('operator')) {
		alert('%');

	} else if (e.target.classList.contains('decimal')) {
		display.textContent = `${display.textContent.split(',').join('')}`;
		if (!display.textContent.includes('.')) {
			display.textContent = `${display.textContent.split(',').join('')}.`;
		} else {
			return;
		}
	} else {
		return;
	}
}
btnContainer.addEventListener('click', btnListener);
/*
const arr = [getSelector('.number0'), getSelector('.number1'), getSelector('.number2'), getSelector('.number3'),
getSelector('.number4'), getSelector('.number5'), getSelector('.number6'), getSelector('.number7'), getSelector('.number8'),
getSelector('.number9'), getSelector('.ac'), getSelector('.pm'), getSelector('.percent'), getSelector('.division'),
getSelector('.multiply'), getSelector('.subtraction'), getSelector('.addition'), getSelector('.decimal'), getSelector('.equal')];
*/
