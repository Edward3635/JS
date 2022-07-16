// Користувацькі функції для отримання елементу(тів) сторінки по id/class/tag.
const getSelector = element => document.querySelector(element),
	getSelectorAll = element => document.querySelectorAll(element);
/*
Реализуйте программу проверки телефона используя DOM Level 2
Используя JS Создайте поле для ввода телефона и кнопку сохранения
Пользователь должен ввести номер телефона в формате 000-000-00-00
Поле того как пользователь нажимает кнопку сохранить проверьте правильность ввода номера.
Если номер правильный сделайте зеленый фон и используя document.location переведите пользователя на страницу 
https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg если будет ошибка отобразите её в <div> до input.
*/

//Отримання елементів по класу, додавання input та кнопки збереження.
const warnTitle = getSelector('.warn__title'), phoneForm = getSelector('.phone__form');
phoneForm.insertAdjacentHTML('beforeend',
	'<div><input class="input__phone" type="tel" id="phone" placeholder="000-000-00-00"></div>');
phoneForm.insertAdjacentHTML('beforeend', '<button class="save">Зберегти</button>');
const savePhone = getSelector('.save'), inputNumber = getSelector('.input__phone');

savePhone.addEventListener('click', () => {
	// Якщо поле не пусте
	if (Boolean(inputNumber.value) !== false) {
		// Якщо поле відповідає регулярному виразу
		if (inputNumber.value.search(/\b\d{3}-\d{3}-\d{2}-\d{2}\b/g) != -1) {
			// Зміна фону на зелений та переведення користувача на іншу сторінку через 1 секунду
			inputNumber.style.backgroundColor = 'green';
			setTimeout(() => {
				document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
			}, 1000);
		} else {
			// Інакше поле не відповідає регулярному виразу
			// Вивести текст з помилкою
			warnTitle.style.display = 'block';
			warnTitle.innerHTML = 'Помилка! Уведіть номер цифрами. Як у прикладі, через дефіс!';
			inputNumber.value = '';
			// І заховати текст через 5 секунд
			setTimeout(() => {
				warnTitle.style.display = 'none';
			}, 5000);
		}
	} else {
		// Інакше поле пусте
		// Вивести текст з помилкою
		warnTitle.style.display = 'block';
		warnTitle.innerHTML = 'Поле для вводу пусте!';
		// І заховати текст через 5 секунд
		setTimeout(() => {
			warnTitle.style.display = 'none';
		}, 5000);
	}
});

/* 
В папке 'banners' лежит HTML код и папка с картинками.
При запуске программы на экране должна отображаться первая картинка, через 10 секунд вместо нее должна быть показана
вторая картинка, ещё через 10 секунд - третья, ещё через 10 секунд - четвертая.
После того, как покажутся все картинки - этот цикл должен начаться заново.
При запуске программы где-то на экране должна появиться кнопка с надписью `Прекратить`.
По нажатию на кнопку 'Прекратить' цикл завершается, на экране остается показанной та картинка, которая была
там при нажатии кнопки. Рядом с кнопкой `Прекратить` должна быть кнопка 'Возобновить показ', при нажатии которой
цикл продолжается с той картинки, которая в данный момент показана на экране.
Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
*/

// Ініціалізація змінних та отримання елементів по класу
const imgWrapper = getSelector('.images-wrapper'), img = getSelectorAll('.image'), prevBtn = getSelector('.slider__prev'),
	nextBtn = getSelector('.slider__next'), imgGap = parseFloat(getComputedStyle(imgWrapper).gap),
	btnStart = getSelector('.btn__start'), btnStop = getSelector('.btn__stop');

let size, counter = 1, intervalHandler, isStart = false;

window.onload = () => {
	// Після повного завантаження сторінки, з фотографіями включно, отримати ширину картинки.
	size = img[0].clientWidth;
	// Прокрутити imgWrapper на довжину 1 слайду + gap проміжок 
	imgWrapper.style.transform = `translateX(${(-size - imgGap) * counter}px)`;
};
// Функція реалізації прокрутки слайдеру вліво
function nextSlide() {
	// Якщо лічильник >= довжині масиву -1 - вихід із функції
	if (counter >= img.length - 1) return;
	// Додавання властивості transition
	imgWrapper.style.transition = 'transform 0.8s ease-in-out';
	// Збільшення лічильнику
	counter++;
	// Переміщення imgWrapper
	imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
}
// Функція реалізації прокрутки слайдеру вправо
function prevSlide() {
	// Якщо лічильник <= 0, - вихід із функції
	if (counter <= 0) return;
	// Додавання властивості transition
	imgWrapper.style.transition = 'transform 0.8s ease-in-out';
	// Зменшення лічильнику
	counter--;
	// Переміщення imgWrapper
	imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
}

// Слухач події на завершення переходу
imgWrapper.addEventListener('transitionend', () => {
	// Якщо елемент містить клас 'last', виконуємо наступне:
	if (img[counter].classList.contains('last')) {
		// вимикаємо transition
		imgWrapper.style.transition = 'none';
		// Змінюємо лічильник
		counter = img.length - 2;
		// Переміщаємо imgWrapper
		imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
	}
	// Якщо елемент містить клас 'first', виконуємо наступне:
	if (img[counter].classList.contains('first')) {
		// вимикаємо transition
		imgWrapper.style.transition = 'none';
		// Змінюємо лічильник
		counter = img.length - counter;
		// Переміщаємо imgWrapper
		imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
	}
});

// Додавання інтервалу та слухачів подій
intervalHandler = setInterval(nextSlide, 10000);

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

btnStart.addEventListener('click', () => {
	// По кліку на кнопку "Старт" запускається слайдер, якщо він був вимкнений
	if (isStart) {
		intervalHandler = setInterval(nextSlide, 10000);
		isStart = false;
	}
});
btnStop.addEventListener('click', () => {
	// По кліку на кнопку "Стоп" зупиняється слайдер
	isStart = true;
	clearInterval(intervalHandler);
});