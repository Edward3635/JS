// Користувацькі функції для отримання елементу(тів) сторінки по id/class/tag.
const getSelector = element => document.querySelector(element),
	getSelectorAll = element => document.querySelectorAll(element);

/* 
* Задание 1

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
intervalHandler = setInterval(nextSlide, 5000);

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
	// foreach метод проходить по масиву, і шукає збіг між натиснутою кнопкою та кнопкою в масиві
	arrayBubbleButtons.forEach((el, index) => {
		if (el === e.target) {
			// Записуємо в змінну поточне значення лічильника і присвоюємо нове значення
			let prevCounter = counter;
			counter = index;
			// Якщо значення попереднього лічильнику = останній кнопці в масиві
			if (prevCounter === arrayBubbleButtons.length) {
				// Якщо значення поточної кнопки = перший елементу в масиві
				if (counter === 0) {
					// Відбувається перехід від останнього до першого найкоротшим шляхом
					// (справа наліво), а не через усі слайди
					counter = arrayBubbleButtons.length;
					nextSlide(0);
					return;
				}
				// Якщо значення попереднього лічильнику = першій кнопці в масиві
			} else if (prevCounter === 1) {
				// Якщо значення поточної кнопки = останньому елементу в масиві
				if (counter === (arrayBubbleButtons.length - 1)) {
					// Відбувається перехід від першого до останнього найкоротшим шляхом 
					//(зліва направо), а не через усі слайди
					counter = 1;
					prevSlide(arrayBubbleButtons.length - 1);
					return;
				}
			}
			// Якщо ж умови не виконані і виходу з функції не було - виконується звичайний перехід до необхідного слайду
			nextSlide(counter);

		}
	});


});


/*
* Задание 2
Написать реализацию функции, которая позволит создавать объекты типа Hamburger.

Технические требования:
- Некая сеть фастфудов предлагает два вида гамбургеров: 1) Маленький (50 гривен, 20 калорий) 2) Большой (100 гривен, 40 калорий).
- Гамбургер должен включать одну дополнительную начинку (обязательно):
- сыр (+ 10 гривен, + 20 калорий)
- салат (+ 20 гривен, + 5 калорий)
- картофель (+ 15 гривен, + 10 калорий)
- Дополнительно, в гамбургер можно добавить приправу (+ 15 гривен, 0 калорий) и полить майонезом (+ 20 гривен, + 5 калорий).
- Необходимо написать программу, рассчитывающую стоимость и калорийность гамбургера. Обязательно нужно использовать ООП
подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).
- Код должен быть защищен от ошибок. Представьте, что вашим классом будет пользоваться другой программист.
Если он передает неправильный тип гамбургера, например, или неправильный вид добавки, должно выбрасываться исключение
(ошибка не должна молча игнорироваться). https://learn.javascript.ru/try-catch
- Написанный класс должен соответствовать следующему jsDoc описанию 
(то есть содержать указанные методы, которые принимают и возвращают данные указанного типа и выбрасывают исключения указанного
типа.)
- Это задача на ООП. Вам нужно сделать класс, который получает на вход информацию о гамбургере, и на выходе дает информацию о
весе и цене. Никакого взаимодействия с пользователем и внешним миром класс делать не должен - все нужные данные ему необходимо
передать явно. Он ничего не будет спрашивать, и не будет ничего выводить.
- Почему? Потому что каждый должен заниматься своим делом, класс должен только обсчитывать гамбургер, а вводом-выводом должны
заниматься другие части кода. Иначе мы получим кашу, где разные функции смешаны вместе.
- Типы начинок, размеры надо сделать константами. Никаких магических строк не должно быть.
- Переданную информацию о параметрах гамбургера экземпляр класса хранит внутри в своих полях.
*/