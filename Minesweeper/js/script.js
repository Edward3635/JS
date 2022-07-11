/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg), mainTitle = getSelector('.main__title'),
	h2 = getSelector('h2');
let isStart = true, sec = 0, min = 0, intervalHandler;

startListener();

function startListener() {

	const btnStart = getSelector('.start__game');
	let btnStartListener = e => {
		h2.style.opacity = '0';
		setTimeout(() => {
			h2.innerHTML = '';
			h2.style.display = 'none';
			mainTitle.style.display = 'flex';
			mainTitle.style.alignItems = 'flex-end';
			mainTitle.style.justifyContent = 'space-around';
		}, 400);
		e.target.remove();
		btnStart.removeEventListener('click', btnStartListener);

		setInterval(() => {
			if (isStart === true) {
				startGame(8, 8, 10);
				isStart = false;
			}
		}, 300);

	};

	btnStart.addEventListener('click', btnStartListener);
}

function startGame(width, height, bombsNumber) {
	getSelector('.grid__field').style.gridTemplateColumns = `repeat(${width},55px)`;
	getSelector('.grid__field').style.gridTemplateRows = `repeat(${height},55px)`;
	getSelector('h3').style.display = 'block';
	const field = getSelector('.grid__field'), cellsCount = width * height;
	field.innerHTML = '<button class="btn__cell"></button>'.repeat(cellsCount);
	const cells = [...field.children];
	let closedCount = cellsCount, currentFlagCount = 0;
	getSelector('.current__flag-count').innerHTML = currentFlagCount;
	const maxFlagCount = getSelector('.max__flag-count').innerHTML = bombsNumber;

	let bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsNumber);
	const fieldClickListener = e => {
		if (e.target.tagName !== 'BUTTON') {
			return;
		}
		if (e.target.classList.contains('btn__flag')) {
			return false;
		}

		const index = cells.indexOf(e.target), column = index % width, row = Math.floor(index / width);
		e.target.classList.remove('btn__cell');
		open(row, column);
	},
		fieldContextMenuListener = e => {
			if (e.target.tagName !== 'BUTTON') {
				return;
			}
			if (e.target.disabled === true) {
				return;
			}
			if (e.target.classList.contains('btn__flag')) {
				if (currentFlagCount != 0) {
					currentFlagCount--;
				}
				e.target.classList.replace('btn__flag', 'btn__question');
				getSelector('.current__flag-count').innerHTML = currentFlagCount;

			} else if (e.target.classList.contains('btn__question')) {
				e.target.classList.remove('btn__question');
			} else {
				if (currentFlagCount < maxFlagCount) {
					currentFlagCount++;
					e.target.classList.add('btn__flag');
					getSelector('.current__flag-count').innerHTML = currentFlagCount;

				} else {
					e.target.classList.add('btn__question');
				}
			}
			e.preventDefault();

		};
	field.addEventListener('click', fieldClickListener);
	field.addEventListener('contextmenu', fieldContextMenuListener);

	function isValid(row, column) {
		return row >= 0 && row < height && column >= 0 && column < width;
	}

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

	function open(row, column) {

		if (!isValid(row, column)) return;
		if (closedCount === cellsCount) {

			getSelector('.timer').style.display = 'block';
			intervalHandler = setInterval(timer, 1000);

			const restartGame = getSelector('.restart__game');
			restartGame.style.display = 'block';
			restartGame.style.visibility = 'unset';
			setTimeout(() => restartGame.style.opacity = '1', 100);
			restartGame.addEventListener('click', (e) => {
				if (!e.target) {
					return;
				}
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
		const index = row * width + column;
		let cell = cells[index];
		if (cell.disabled === true) return;
		cell.disabled = true;
		if (isBomb(row, column)) {
			if (closedCount === cellsCount) {
				do {
					bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsNumber);
				} while (isBomb(row, column));

			} else {
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

		const count = getCount(row, column);
		if (count !== 0) {
			cell.innerHTML = count;
			cell.className = 'nobomb__cell';

			if (closedCount <= bombsNumber) {
				bombs.forEach(el => {
					cell = cells[el];
					cell.disabled = true;
					cell.className = 'bomb__cell';
				});
				clearInterval(intervalHandler);
				h2.innerHTML = 'You won!';
				h2.style.display = 'block';
				h2.style.color = 'lightgreen';
				h2.style.opacity = '1';

			}
			return;
		} else {
			cell.classList = 'empty__cell';
			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					open(row + y, column + x);
				}
			}
		}


	}
	function isBomb(row, column) {
		if (!isValid(row, column)) return false;
		const index = row * width + column;
		return bombs.includes(index);
	}
	function timer() {
		// Автоматично додається нуль перед однозначним числом (1-9), по типу 01,02,03... За допомогою padStart()
		sec++;
		getSelector('.timer').innerHTML =
			`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
		// Логіка секундоміру: рахування мілісекунд - секунд -хвилини - годин
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