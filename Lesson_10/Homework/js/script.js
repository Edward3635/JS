// Користувацькі функції для отримання елементу(тів) сторінки по id/class/tag.
const getSelector = element => document.querySelector(element),
	getSelectorAll = element => document.querySelectorAll(element);

/* 
Задание 1

Реализовать слайдер на чистом Javascript.

Технические требования:
- Создать HTML разметку, содержащую кнопки `Previous`, `Next`, и картинки (6 штук), которые будут пролистываться горизонтально.
- На странице должна быть видна только одна картинка. Слева от нее будет кнопка `Previous`, справа - `Next`.
- По нажатию на кнопку `Next` - должна появиться новая картинка, следующая из списка.
- По нажатию на кнопку `Previous` - должна появиться предыдущая картинка.
- Слайдер должен быть бесконечным, т.е. если в начале нажать на кнопку `Previous`, то покажется последняя картинка,
а если нажать на `Next`, когда видимая - последняя картинка, то будет видна первая картинка.
- Пример работы слайдера можно увидеть(http://kenwheeler.github.io/slick/) (первый пример).
*/
// Ініціалізація змінних та отримання елементів по класу
const imgWrapper = getSelector('.images-wrapper'), img = getSelectorAll('.image'), prevBtn = getSelector('.slider__prev'),
	nextBtn = getSelector('.slider__next'), imgGap = parseFloat(getComputedStyle(imgWrapper).gap),
	btnStart = getSelector('.btn__start'), btnStop = getSelector('.btn__stop'),
	[...arrayBubbleButtons] = getSelectorAll('.bubble__button'), bubbleButtons = getSelector('.bubble__buttons');

let size, counter = 1, bubbleCounter = 0, intervalHandler, isStart = false;

window.onload = () => {
	// Після повного завантаження сторінки, з фотографіями включно, отримати ширину картинки.
	size = img[0].clientWidth;
	// Прокрутити imgWrapper на довжину ((-size - imgGap) * counter)px - (На довжину 1 слайду)
	imgWrapper.style.transform = `translateX(${(-size - imgGap) * counter}px)`;
};

// Функція реалізації прокрутки слайдеру вліво
function nextSlide(arg) {
	// Якщо лічильник >= довжині масиву -1 - вихід із функції
	if (counter >= img.length - 1) return;


	// Додавання властивості transition
	imgWrapper.style.transition = 'transform 0.8s ease-in-out';
	// Збільшення лічильнику
	counter++;


	// Виклик функції переходу bubble buttons
	bubbleButtonNextActive(arg);
	// Переміщення imgWrapper
	imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
}
// Функція реалізації прокрутки слайдеру вправо
function prevSlide(arg) {
	// Якщо лічильник <= 0, - вихід із функції
	if (counter <= 0) return;
	// Додавання властивості transition
	imgWrapper.style.transition = 'transform 0.8s ease-in-out';
	// Зменшення лічильнику
	counter--;
	// Виклик функції переходу bubble buttons
	bubbleButtonPrevActive(arg);
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
intervalHandler = setInterval(nextSlide, 14000);

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

btnStart.addEventListener('click', () => {
	// По кліку на кнопку "Старт" запускається слайдер, якщо він був вимкнений
	if (isStart) {
		intervalHandler = setInterval(nextSlide, 2000);
		isStart = false;
	}
});
btnStop.addEventListener('click', () => {
	// По кліку на кнопку "Стоп" зупиняється слайдер
	isStart = true;
	clearInterval(intervalHandler);
});

// Функція активації наступного bubble button
function bubbleButtonNextActive(index) {
	// Видалення активного класу поточної кнопки
	arrayBubbleButtons[bubbleCounter].classList.remove('bubble__active');
	// Якщо аргументом є цифра, отже був клік по bubble button
	if (typeof index == 'number') {
		// Додати активний клас елементу масиву по отриманому індексу
		arrayBubbleButtons[index].classList.add('bubble__active');
		bubbleCounter = index;
	} else {
		// Інакше кліку по bubble button не було
		// Якщо лічильник = останньому елементу, тобто arrayBubbleButtons.length - 1
		if (bubbleCounter === arrayBubbleButtons.length - 1) {
			// Додаємо клас до елементу з початку
			// Обнулити лічильник
			arrayBubbleButtons[0].classList.add('bubble__active');
			bubbleCounter = 0;

		} else {
			// Інакше додати активний клас наступному елементу
			arrayBubbleButtons[bubbleCounter + 1].classList.add('bubble__active');
			// Збільшити лічильник
			bubbleCounter++;
		}
	}
}
// Функція активації попереднього bubble button
function bubbleButtonPrevActive(index) {
	// Видалення активного класу поточної кнопки
	arrayBubbleButtons[bubbleCounter].classList.remove('bubble__active');
	// Якщо аргументом є цифра, отже був клік по bubble button
	if (typeof index == 'number') {
		// Додати активний клас елементу масиву по отриманому індексу
		arrayBubbleButtons[index].classList.add('bubble__active');
		bubbleCounter = index;
	} else {
		// Інакше кліку по bubble button не було
		// Якщо лічильник = 0
		if (bubbleCounter === 0) {
			// Додаємо клас до елементу з кінця
			// Лічильник = останньому елементу, тобто довжині масиву arrayBubleButtons - 1
			arrayBubbleButtons[arrayBubbleButtons.length - 1].classList.add('bubble__active');
			bubbleCounter = arrayBubbleButtons.length - 1;
		} else {
			// Інакше додати активний клас попередньому елементу
			arrayBubbleButtons[bubbleCounter - 1].classList.add('bubble__active');
			// Зменшити лічильник
			bubbleCounter--;
		}
	}
}

// Слухач події на клік по будь-якій кнопці bubble
bubbleButtons.addEventListener('click', (e) => {
	// Якщо кнопка бабл вже активна - вихід із функції
	if (e.target.classList.contains('bubble__active')) return;
	// foreach метод проходить по масиву, якщо знаходить збіг між натиснутою кнопкою та кнопкою в масиві - виконує дію
	arrayBubbleButtons.forEach((el, index) => {
		if (el === e.target) {
			let prevCounter = counter;
			counter = index;

			if (prevCounter === arrayBubbleButtons.length) {
				if (counter === 0) {
					counter = arrayBubbleButtons.length;
					nextSlide(0);
					return;
				}
			} else if (prevCounter === 1) {
				if (counter === (arrayBubbleButtons.length - 1)) {
					counter = 1;
					prevSlide(arrayBubbleButtons.length - 1);
					return;
				}
			}
			nextSlide(counter);

		}
	});


});

/*
Задание 2
Написать реализацию функции, которая позволит создавать объекты типа Hamburger.

Технические требования:
- Некая сеть фастфудов предлагает два вида гамбургеров: 1) Маленький (50 гривен, 20 калорий) 2) Большой (100 гривен, 40 калорий).
- Гамбургер должен включать одну дополнительную начинку (обязательно):
- сыр (+ 10 гривен, + 20 калорий)
- салат (+ 20 гривен, + 5 калорий)
- картофель (+ 15 гривен, + 10 калорий)
- Дополнительно, в гамбургер можно добавить приправу (+ 15 гривен, 0 калорий) и полить майонезом (+ 20 гривен, + 5 калорий).
*/