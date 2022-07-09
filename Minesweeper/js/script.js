/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg),
	h2 = getSelector('h2');

startListener();

function startListener() {

	const btnStart = getSelector('.start__game');

	btnStart.addEventListener('click', (e) => {
		e.target.nextElementSibling.classList.add('grid__field');
		// tut style.gridTemplateColumns = `repeat(${myVariable},60px)`;
		h2.style.opacity = '0';
		setTimeout(() => h2.innerHTML = '', 400);
		e.target.remove();
		startGame(8, 8, 12);

	});
}
function startGame(width, height, bombsNumber) {
	const field = getSelector('.grid__field'), cellsCount = width * height;
	field.innerHTML = '<button class="btn__cell"></button>'.repeat(cellsCount);
	const cells = [...field.children];
	let closedCount = cellsCount;

	const bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsNumber);
	field.addEventListener('click', (e) => {
		if (e.target.tagName !== 'BUTTON') {
			return;
		}

		const index = cells.indexOf(e.target), column = index % width, row = Math.floor(index / width);
		e.target.classList.remove('btn__cell');
		open(row, column);
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
		const index = row * width + column;
		let cell = cells[index];
		if (cell.disabled === true) return;
		cell.disabled = true;
		if (isBomb(row, column)) {
			h2.innerHTML = 'You lose!';
			h2.style.color = 'red';
			h2.style.opacity = '1';
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
		if (closedCount <= bombsNumber) {
			h2.innerHTML = 'You won!';
			h2.style.color = 'lightgreen';
			h2.style.opacity = '1';
			return;

		}
		const count = getCount(row, column);
		//cell.innerHTML = count;
		//cell.className = 'bg__nobomb';
		if (count !== 0) {
			cell.innerHTML = count;
			cell.className = 'nobomb__cell';
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