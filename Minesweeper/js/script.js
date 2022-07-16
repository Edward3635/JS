/// Користувацька функція для отримання елементу сторінки по id/class/tag, а також пошук класів/тегів DOM дереву.
const getSelector = arg => document.querySelector(arg), mainTitle = getSelector('.main__title'),
	h2 = getSelector('h2');
// Ініціалізація змінних для секундоміру
let isStart = true, sec = 0, min = 0, intervalHandler;

startListener();

// Функція прослуховування кнопки Start
function startListener() {
	// Шукаємо елемент по класу
	const btnStart = getSelector('.start__game');
	// Створюємо функцію для EventListener
	let btnStartListener = e => {
		h2.style.opacity = '0';
		setTimeout(() => {
			h2.innerHTML = '';
			h2.style.display = 'none';
			mainTitle.style.display = 'flex';
			mainTitle.style.alignItems = 'flex-end';
			mainTitle.style.justifyContent = 'space-around';
		}, 400);
		//Видаляємо натиснутий елемент та слухача події
		e.target.remove();
		btnStart.removeEventListener('click', btnStartListener);
		// setInterval повторюється кожні 300ms
		setInterval(() => {
			//Якщо змінна isStart === true, відбувається старт нової гри, інакше setInterval повторюється кожні 300ms
			// не виконуючи ніяких дій
			if (isStart === true) {
				startGame(8, 8, 10);
				isStart = false;
			}
		}, 300);

	};
	// Запуск слухача подій
	btnStart.addEventListener('click', btnStartListener);
}
// Функція, що ініціалізує гру та її логіку
function startGame(width, height, bombsNumber) {
	// Додавання CSS властивостей - GRID, DOM елементу
	getSelector('.grid__field').style.gridTemplateColumns = `repeat(${width},55px)`;
	getSelector('.grid__field').style.gridTemplateRows = `repeat(${height},55px)`;
	// Поява h3 заголовку завдяки додаванню властивості display = 'block'
	getSelector('h3').style.display = 'block';
	// Отримання батьківського DOM елементу, в якому будуть знаходитись клітинки та оримання загальної кількості клітинок
	// шляхом множення ширини на висоту
	const field = getSelector('.grid__field'), cellsCount = width * height;
	// Ініціалізація клітинок
	field.innerHTML = '<button class="btn__cell"></button>'.repeat(cellsCount);
	// Додавання DOM-елементів (клітинок) в масив cells
	const cells = [...field.children];
	// Ініціалізація змінних, що нам знадобляться в майбутньому
	let closedCount = cellsCount, currentFlagCount = 0;
	// Отримання елементу, що відображає кількість поставлених флажків(де знаходиться бомба), по класу
	// і зміна його значення на currentFlagCount
	getSelector('.current__flag-count').innerHTML = currentFlagCount;
	// Отримання елементу, що відображає максимальну кількість флагів, яка = кількості бомб, відповідна записуємо в цей елемент
	// змінну bombsNumber, що = кількості бомб.
	const maxFlagCount = getSelector('.max__flag-count').innerHTML = bombsNumber;

	// Створюємо масив, розмірність якого cellsCount, і заповнюємо його елементами, потім сортуємо його у "випадковому"
	// порядку і залишаємо елементи від 0 до bombsNumber. Це і будуть клітинки з бомбами.
	let bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsNumber);
	// Функція, що передаватиметься в слухач подій на лівий клік
	const fieldClickListener = e => {
		// Якщо клік був не по тегу <button> - вихід із функції
		if (e.target.tagName !== 'BUTTON') {
			return;
		}
		// Якщо клік був по елементу з класом .btn__flag - вихід із функції. Це зроблено того щоб, усі клітинки,
		// що помічені флагом - не відкривались.
		if (e.target.classList.contains('btn__flag')) {
			return false;
		}
		// Знаходження індексу, колонки та ряду
		const index = cells.indexOf(e.target), column = index % width, row = Math.floor(index / width);
		// Видалення класу елементу, який був клікнутий, щоб видалити ефекти наведення, натиску на клітинку.
		e.target.classList.remove('btn__cell');
		// Відкрити клітинку
		open(row, column);
	},
		// Функція, що передаватиметься в слухач подій на правий клік
		fieldContextMenuListener = e => {
			// Якщо клік був не по тегу <button> - вихід із функції
			if (e.target.tagName !== 'BUTTON') {
				return;
			}
			// Якщо клік був не по клітинці з властивістю disabled =true - вихід із функції
			if (e.target.disabled === true) {
				return;
			}
			// Якщо клітинка містить клас btn__flag і якщо поточний лічильник !=0 - зменшуємо каунтер на 1
			if (e.target.classList.contains('btn__flag')) {
				if (currentFlagCount != 0) {
					currentFlagCount--;
				}
				// Заміняємо клас на клас що буде відображати знак питання
				e.target.classList.replace('btn__flag', 'btn__question');
				// Записуємо нове значення
				getSelector('.current__flag-count').innerHTML = currentFlagCount;

				// Якщо клітинка містить клас btn__question - видаляємо клас
			} else if (e.target.classList.contains('btn__question')) {
				e.target.classList.remove('btn__question');
			} else {
				// Інакше, якшо поточний лічильник менший за максимальний збільшуємо лічильник і додаємо клас btn__flag
				if (currentFlagCount < maxFlagCount) {
					currentFlagCount++;
					e.target.classList.add('btn__flag');
					// Записуємо нове значення
					getSelector('.current__flag-count').innerHTML = currentFlagCount;

				} else {
					// Інашке, поточний лічильник >= максимальний, додаємо просто клас btn__question
					e.target.classList.add('btn__question');
				}
			}
			//Відміна стандартної дії на правий клік (контекстне меню)
			e.preventDefault();

		};
	// Додавання слухачів подій
	field.addEventListener('click', fieldClickListener);
	field.addEventListener('contextmenu', fieldContextMenuListener);

	// Перевірка на валідність ряду\колонки
	function isValid(row, column) {
		return row >= 0 && row < height && column >= 0 && column < width;
	}
	// Отримання значення, що = кількості сусідніх клітинок з бомбами
	function getCount(row, column) {
		let count = 0;
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				if (isBomb(row + y, column + x)) {
					count++;
				}
			}
		}
		return count;
	}
	// Функція відкриття клітинки
	function open(row, column) {
		// Перевірка на валідність
		if (!isValid(row, column)) return;
		if (closedCount === cellsCount) {
			// Поява секундоміру при старті гри
			getSelector('.timer').style.display = 'block';
			intervalHandler = setInterval(timer, 1000);
			// Поява кнопки "Почати нову гру"
			const restartGame = getSelector('.restart__game');
			restartGame.style.display = 'block';
			restartGame.style.visibility = 'unset';
			setTimeout(() => restartGame.style.opacity = '1', 100);
			// Слухач події на кнопку
			restartGame.addEventListener('click', (e) => {
				if (!e.target) {
					return;
				}
				// Коли нажали на кнопку - видалення попередніх слухачів, зникнення кнопки, зупинка секундоміру
				// скидання значень секундоміру та вихід з поточної гри
				h2.style.opacity = '0';
				restartGame.style.opacity = '0';
				setTimeout(() => restartGame.style.visibility = 'hidden', 200);
				field.removeEventListener('click', fieldClickListener);
				field.removeEventListener('contextmenu', fieldContextMenuListener);
				clearInterval(intervalHandler);
				sec = 0, min = 0;
				getSelector('.timer').style.display = 'none';
				getSelector('.timer').innerHTML = '00:00';
				isStart = true;
				return;

			});
		}
		// Отримання індексу клітинка та присвоєння DOM-елементу в змінну
		const index = row * width + column;
		let cell = cells[index];
		// Якщо клітинка має властивість disabled = true - вихід із функції
		if (cell.disabled === true) return;
		// Присвоєння клітинці властивість disabled = true
		cell.disabled = true;
		// Перевірка чи містить клітинка бомбу
		if (isBomb(row, column)) {
			//Якщо містить, але це перша відкрита клітинка
			if (closedCount === cellsCount) {
				// Пересортування бомб
				do {
					bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsNumber);
				} while (isBomb(row, column));

			} else {
				// Якщо клітинка містить бомбу і це не перша відкрита клітинка - то завершення гри і видалення будь-якої взаємодії
				// з грою крім кнопки нової гри
				clearInterval(intervalHandler);
				h2.innerHTML = 'You lose!';
				h2.style.color = 'red';
				h2.style.display = 'block';
				setTimeout(() => h2.style.opacity = '1', 400);
				h2.style.margin = '0px';
				mainTitle.style.margin = '0 auto';
				mainTitle.style.maxWidth = '450px';
				bombs.forEach(el => {
					cell = cells[el];
					cell.className = 'bomb__cell';
				});
				cells[index].className = 'bomb__redcell';
				cells.forEach(el => {
					el.disabled = true;
					el.classList.remove('btn__cell');

				});
				return;
			}
		}


		closedCount--;
		// Отримання каунтеру, що = кількості клітинок з бомбаби навколо
		const count = getCount(row, column);
		// Якщо каунтер > 0 записуємо значення в клітинку
		if (count !== 0) {
			cell.innerHTML = count;
			cell.className = 'nobomb__cell';
			// Якщо кількість закритих клітинок = кількості бомб
			if (closedCount <= bombsNumber) {
				// Показати клітинки з бомбами
				bombs.forEach(el => {
					cell = cells[el];
					cell.disabled = true;
					cell.className = 'bomb__cell';
				});
				// Зупинити таймер і показати текст з вітанням
				clearInterval(intervalHandler);
				h2.innerHTML = 'You won!';
				h2.style.display = 'block';
				h2.style.color = 'lightgreen';
				h2.style.opacity = '1';

			}
			return;
		} else {
			// Якщо ж каутер = 0, то пройтись циклом і відкрити сусідні клітинки
			cell.classList = 'empty__cell';
			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					open(row + y, column + x);
				}
			}
		}


	}
	// Перевірка на наявність бомби
	function isBomb(row, column) {
		if (!isValid(row, column)) return false;
		const index = row * width + column;
		return bombs.includes(index);
	}
	// Функція таймеру
	function timer() {
		sec++;
		// Автоматично додається нуль перед однозначним числом (1-9), по типу 01,02,03... За допомогою padStart()
		getSelector('.timer').innerHTML =
			`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
		// Логіка секундоміру: рахування секунд -хвилини
		if (sec === 59) {
			sec = -1, min++;
			if (min === 60) {
				min = 59;
				sec = 59;
				`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
				clearInterval(intervalHandler);
				return;
			}

		}
	}
}