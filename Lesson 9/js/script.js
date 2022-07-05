// Classwork секундомер

let msec = 0, sec = 0, min = 0, hour = 0, intervalHandler, isStart = true;
const getSelector = selector => document.querySelector(selector),
	buttons = getSelector('.buttons'),
	display = getSelector('.display__container'),
	inputNumber = getSelector('.input__number'),
	count = () => {
		getSelector('.display__text').innerHTML =
			`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

		if (msec === 99) {
			msec = 0, sec++;
			if (sec === 60) {
				sec = 0, min++;
				if (min === 60) {
					min = 0, hour++;
				}
			}
		}
		msec++;
	};
buttons.addEventListener('click', e => {
	if (e.target.classList.contains('start')) {
		if (isStart) {
			isStart = false;
			display.style.backgroundColor = 'rgb(2, 61, 2)';
			intervalHandler = setInterval(count, 10);
		}
	}
	if (e.target.classList.contains('stop')) {
		clearInterval(intervalHandler);
		isStart = true;
		display.style.backgroundColor = 'red';
	}
	if (e.target.classList.contains('reset')) {
		clearInterval(intervalHandler);
		isStart = true;
		msec = 0, sec = 0, min = 0;
		display.style.backgroundColor = 'gray';
		getSelector('.display__text').innerHTML = '00:00:00';
	}
});


// Homework Вгадай значення
// Для зручності, можна через Enter вводити значення
inputNumber.addEventListener('keyup', (e) => {
	if (e.code === 'Enter') {
		//if (getSelector('.input__number') === document.activeElement) {
		showRandomNumber();
		//}
	}

});

let randomNumber = Math.floor(Math.random() * 100) + 1,
	btn__guessNumber = getSelector('.btn__guess-number');
btn__guessNumber.onclick = showRandomNumber;
function showRandomNumber() {
	const numberInputValue = inputNumber.value;
	// Перевірка вводу регулярним виразом
	if (numberInputValue.replace(/\D/, '')) {
		if (numberInputValue > randomNumber) {
			getSelector('.input__title').style.color = 'red';
			getSelector('.input__title').textContent = 'Загадане число менше введеного Вами.';
			inputNumber.value = '';
		} else if (numberInputValue < randomNumber) {
			getSelector('.input__title').style.color = 'red';
			getSelector('.input__title').textContent = 'Загадане число більше введеного Вами.';
			inputNumber.value = '';
		} else {
			getSelector('.input__title').style.color = 'green';
			getSelector('.input__title').textContent = `Вітаю! Загадане число - ${randomNumber}.
			Граєм далі, яке наступне???`;
			inputNumber.value = '';
			randomNumber = Math.floor(Math.random() * 100) + 1;


		}

	} else {
		getSelector('.input__title').textContent = 'Треба ввести число! (Цифрами)';
	}
	inputNumber.focus();

}

// Homework авторизація

const btn__signIn = getSelector('.sign__in');
btn__signIn.onclick = authorization;
function authorization() {
	const inputLoginValue = getSelector('.login').value, inputPasswordValue = getSelector('.password').value,
		titleLogin = getSelector('.auth__title-login'), titlePassword = getSelector('.auth__title-password'),
		titleSignIn = getSelector('.auth__title-signIn');
	function resetStyle(arg) {
		titlePassword.textContent = '';
		titleLogin.textContent = '';
		titleSignIn.textContent = '';
		if (arg === 'login') {
			titleLogin.textContent = 'Ви не заповнили поле login';
		} else if (arg === 'pass') {
			titlePassword.textContent = 'Ви не заповнили поле password';
		} else if (arg === 'logpass') {
			titleLogin.textContent = 'Ви не заповнили поле login';
			titlePassword.textContent = 'Ви не заповнили поле password';
		} else if (arg === 'correct') {
			titleSignIn.style.color = 'green';
			titleSignIn.textContent = 'Ви авторизовані у системі!';
		} else {
			titleSignIn.textContent = 'Логін або пароль не вірні';
		}
	}
	function hideText(arg) {
		//titleSignIn.textContent = '';
		if (arg === 'login') {
			titleLogin.textContent = '';
		} else if (arg === 'pass') {
			titlePassword.textContent = '';
		} else if (arg === 'logpass') {
			titleLogin.textContent = '';
			titlePassword.textContent = '';
		} else if (arg === 'correct') {
			titleSignIn.textContent = '';
		} else {
			titleSignIn.textContent = '';
		}
	}

	if (inputLoginValue !== '') {
		if (inputPasswordValue === '') {
			resetStyle('pass');
			setTimeout(hideText, 3500, 'pass');
		} else {
			if (inputLoginValue === 'admin') {
				if (inputPasswordValue === '12345') {
					resetStyle('correct');
					setTimeout(hideText, 1500, 'correct');
					setTimeout(() => document.location = 'http://www.mozilla.org', 2200);
				} else {
					resetStyle();
					setTimeout(hideText, 3500);

				}
			} else {
				resetStyle();
				setTimeout(hideText, 3500);
			}
		}
	} else {
		if (inputPasswordValue === '') {
			resetStyle('logpass');
			setTimeout(hideText, 3500, 'logpass');

		} else {
			resetStyle('login');
			setTimeout(hideText, 3500, 'login');
		}



	}
}

// Slider
let sliderCounter = 2;
setInterval(() => {
	const img = document.querySelector('.slider-img');
	img.src = `./img/img${sliderCounter}.jpg`;
	sliderCounter++;
	if (sliderCounter > 5) {
		sliderCounter = 1;
	}
}, 3000);