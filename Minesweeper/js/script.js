// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg);

startGame(8, 8, 50);

function startGame(width, height, bombsNumber) {
	const field = getSelector('.grid__field'), cellsCount = width * height;
	field.innerHTML = '<button class="btn__cell"></button>'.repeat(cellsCount);
	const cells = [...field.children];

	const bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsNumber);
	field.addEventListener('click', (e) => {
		if (e.target.tagName !== 'BUTTON') {
			return;
		}

		const index = cells.indexOf(e.target), column = index % width, row = Math.floor(index / width);
		e.target.classList.remove('btn__cell');
		open(row, column);
	});

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
		const index = row * width + column, cell = cells[index];
		if (isBomb(row, column)) {
			cell.className = 'bg__bomb';
		} else {
			cell.innerHTML = getCount(row, column);
			cell.className = 'bg__nobomb';
		}
	}
	function isBomb(row, column) {
		const index = row * width + column;
		return bombs.includes(index);
	}
}