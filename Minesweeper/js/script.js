// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg);

startGame(8, 8, 10);

function startGame(width, height, bombsNumber) {
	const field = getSelector('.grid__field'), cellsCount = width * height;
	field.innerHTML = '<button></button>'.repeat(cellsCount);

}