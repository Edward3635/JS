/// Користувацька функція для отримання елементу сторінки по id/class/tag.
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
const imgWrapper = getSelector('.images-wrapper'), img = getSelectorAll('.image'), prevBtn = getSelector('.slider__prev'),
	nextBtn = getSelector('.slider__next'), imgGap = parseFloat(getComputedStyle(imgWrapper).gap),
	btnStart = getSelector('.btn__start'), btnStop = getSelector('.btn__stop'),
	[...arrayBubbleButtons] = getSelectorAll('.bubble__button'), bubbleButtons = getSelector('.bubble__buttons');

let size, counter = 1, bubbleCounter = 0, intervalHandler, isStart = false;

window.onload = () => {
	size = img[0].clientWidth;
	imgWrapper.style.transform = `translateX(${(-size - imgGap) * counter}px)`;
};

function nextSlide(arg) {
	if (counter >= img.length - 1) return;
	imgWrapper.style.transition = 'transform 0.8s ease-in-out';
	counter++;
	bubbleButtonNextActive(arg);
	imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
}
function prevSlide(arg) {
	if (counter <= 0) return;
	imgWrapper.style.transition = 'transform 0.8s ease-in-out';
	counter--;
	bubbleButtonPrevActive(arg);
	imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
}


imgWrapper.addEventListener('transitionend', () => {
	if (img[counter].classList.contains('last')) {

		imgWrapper.style.transition = 'none';
		counter = img.length - 2;
		imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
	}
	if (img[counter].classList.contains('first')) {

		imgWrapper.style.transition = 'none';
		counter = img.length - counter;
		imgWrapper.style.transform = `translate(${(-size - imgGap) * counter}px)`;
	}
});

intervalHandler = setInterval(nextSlide, 6000);

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

btnStart.addEventListener('click', () => {
	if (isStart) {
		intervalHandler = setInterval(nextSlide, 6000);
		isStart = false;
	}
});
btnStop.addEventListener('click', () => {
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