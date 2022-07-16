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
intervalHandler = setInterval(nextSlide, 2000);

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


function bubbleButtonNextActive(index) {
	arrayBubbleButtons[bubbleCounter].classList.remove('bubble__active');

	if (typeof index == 'number') {
		//alert('ok');
		arrayBubbleButtons[index].classList.add('bubble__active');
		bubbleCounter = index;
	} else {

		if (bubbleCounter === arrayBubbleButtons.length - 1) {
			arrayBubbleButtons[0].classList.add('bubble__active');
			bubbleCounter = 0;

		} else {
			arrayBubbleButtons[bubbleCounter + 1].classList.add('bubble__active');
			bubbleCounter++;
		}
	}
}
function bubbleButtonPrevActive(index) {
	arrayBubbleButtons[bubbleCounter].classList.remove('bubble__active');
	if (typeof index == 'number') {
		arrayBubbleButtons[index].classList.add('bubble__active');
		bubbleCounter = index;
	} else {
		if (bubbleCounter === 0) {
			arrayBubbleButtons[arrayBubbleButtons.length - 1].classList.add('bubble__active');
			bubbleCounter = arrayBubbleButtons.length - 1;
		} else {
			arrayBubbleButtons[bubbleCounter - 1].classList.add('bubble__active');
			bubbleCounter--;
		}
	}
}

bubbleButtons.addEventListener('click', (e) => {
	if (e.target.classList.contains('bubble__active')) return;
	arrayBubbleButtons.forEach((el, index) => {
		if (el === e.target) {
			//prevCounter = counter
			//Якщо prevCounter === 5, а counter 1 то nextSlide(counter, kek), де kek = 7
			//І навпаки.
			counter = index;
			nextSlide(counter);
			return;

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