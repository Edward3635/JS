// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg);

startGame(8, 8, 30);

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
	function open(row, column) {
		const index = row * width + column, cell = cells[index];
		cell = isBomb(row, column) ? cell.classList.add('bg__bomb') : cell.ouuterHTML = ' ';
		cell.disabled = true;
	}
	function isBomb(row, column) {
		const index = row * width + column;
		return bombs.includes(index);
	}
}