// Секундомір
// Ініціалізація змінних
let msec = 0, sec = 0, min = 0, hour = 0, intervalHandler, isStart = true;
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = selector => document.querySelector(selector),
	buttons = getSelector('.buttons'),
	display = getSelector('.display__container'),
	inputNumber = getSelector('.input__number'),
	count = () => {
		// Автоматично додається нуль перед однозначним числом (1-9), по типу 01,02,03... За допомогою padStart()
		getSelector('.display__text').innerHTML =
			`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
		// Логіка секундоміру: рахування мілісекунд - секунд -хвилини - годин
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
// Панель керування
// Кнопки старт, стоп і ресет.
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


// Додаткове завдання: гра "Вгадай значення" від 1 до 100
// Для зручності, можна через Enter вводити значення
inputNumber.addEventListener('keyup', (e) => {
	if (e.code === 'Enter') {
		showRandomNumber();

	}

});
// Генерація випадкового числа
let randomNumber = Math.floor(Math.random() * 100) + 1,
	btn__guessNumber = getSelector('.btn__guess-number');
// Слідкування за кліком
btn__guessNumber.onclick = showRandomNumber;
function showRandomNumber() {
	// Отримання значення із поля інпут
	const numberInputValue = inputNumber.value;
	// Валідація
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
			// Після вгадування числа привітаємо гравця і гра починається знову автоматично
			// Генерується нове число
			randomNumber = Math.floor(Math.random() * 100) + 1;


		}

	} else {
		getSelector('.input__title').textContent = 'Треба ввести число! (Цифрами)';
	}
	inputNumber.focus();

}

// Альтернатива третьому завданню класної роботи: сторінка авторизації, логін admin пароль 12345

const btn__signIn = getSelector('.sign__in');
// Слідкування за подією
btn__signIn.onclick = authorization;
function authorization() {
	// Ініціалізація необхідних змінних і даних
	const inputLoginValue = getSelector('.login').value, inputPasswordValue = getSelector('.password').value,
		titleLogin = getSelector('.auth__title-login'), titlePassword = getSelector('.auth__title-password'),
		titleSignIn = getSelector('.auth__title-signIn');
	// Функція, що виводить відповідь на спроби авторизуватися
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
	// Функція, що ховатиме відповідь на спроби авторизуватися
	function hideText(arg) {
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
	// Перевірка авторизації
	if (inputLoginValue !== '') {
		if (inputPasswordValue === '') {
			resetStyle('pass');
			setTimeout(hideText, 3500, 'pass');
		} else {
			if (inputLoginValue === 'admin') {
				if (inputPasswordValue === '12345') {
					resetStyle('correct');
					setTimeout(hideText, 1500, 'correct');
					setTimeout(() => document.location =
						'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg', 2200);
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

// Простенький слайдер
// Через setInterval кожні 3 секунди змінюється картинка за допомогою цикла
let sliderCounter = 2;
setInterval(() => {
	const img = document.querySelector('.slider-img');
	img.src = `./img/img${sliderCounter}.jpg`;
	sliderCounter++;
	// Обнулити каунтер, коли дойде до останньої картинки
	if (sliderCounter > 5) {
		sliderCounter = 1;
	}
}, 3000);