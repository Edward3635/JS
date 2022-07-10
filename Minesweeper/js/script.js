/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg), mainTitle = getSelector('.main__title'),
	h2 = getSelector('h2');

startListener();

function startListener() {

	const btnStart = getSelector('.start__game');

	btnStart.addEventListener('click', (e) => {
		h2.style.opacity = '0';
		setTimeout(() => {
			h2.innerHTML = '';
			h2.style.display = 'none';
			mainTitle.style.display = 'flex';
			mainTitle.style.alignItems = 'flex-end';
			mainTitle.style.justifyContent = 'space-around';
		}, 400);
		e.target.remove();

		startGame(8, 8, 12);

	});
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

	const bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsNumber);
	field.addEventListener('click', (e) => {
		if (e.target.tagName !== 'BUTTON') {
			return;
		}

		const index = cells.indexOf(e.target), column = index % width, row = Math.floor(index / width);
		e.target.classList.remove('btn__cell');
		open(row, column);
	});
	field.addEventListener('contextmenu', (e) => {
		if (e.target.tagName !== 'BUTTON') {
			return;
		}
		if (e.target.disabled === true) {
			return;
		}
		if (e.target.classList.contains('btn__flag')) {
			currentFlagCount--;
			e.target.classList.replace('btn__flag', 'btn__question');
			getSelector('.current__flag-count').innerHTML = currentFlagCount;

		} else if (e.target.classList.contains('btn__question')) {
			e.target.classList.remove('btn__question');
		} else {
			if (currentFlagCount < 10) {
				currentFlagCount++;
				e.target.classList.add('btn__flag');
				getSelector('.current__flag-count').innerHTML = currentFlagCount;

			}
		}
		e.preventDefault();

	});

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
			const restartGame = getSelector('.restart__game');
			restartGame.style.display = 'block';
			setTimeout(() => restartGame.style.opacity = '1', 400);
			restartGame.addEventListener('click', (e) => {
				if (!e.target) {
					return;
				}
				h2.style.opacity = '0';
				restartGame.style.opacity = '0';
				setTimeout(() => restartGame.style.display = 'none', 400);
				startGame(8, 8, 12);

			});
		}
		const index = row * width + column;
		let cell = cells[index];
		if (cell.disabled === true) return;
		cell.disabled = true;
		if (isBomb(row, column)) {
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
}