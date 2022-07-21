/*
Завдання:
Реалізувати функцію підсвічування клавіш
Технічні вимоги:
- Кожна кнопка містить назву клавіші на клавіатурі
- Після натискання названих клавіш - та кнопка , на якій написана ця літера, повинна фарбуватись у синій колір.
При цьому якщо якась інша  літера вже раніше була пофарбована в синій колір - вона стає чорною. Наприклад натисканням Enter
пешра кнопка забарвлюється в синій колір. Далі, користувач натискає 'S', і кнопка забарвлюється в синій колір, а кнопка 'Enter'
знову стає чорною.
*/

let keyInMemory;
// Функція на змінення кольору кнопок
function changeBtn(arr, key) {

	if (keyInMemory) {
		keyInMemory.style.background = 'black';
	}
	arr.forEach(el => {
		if (el.textContent === key) {
			el.style.background = 'blue';
			keyInMemory = el;
		}
	});
}

// Слухач на клавіатуру
window.addEventListener('keyup', (e) => {
	// Отримуємо список DOM-елементів
	const [...buttons] = document.querySelectorAll('.btn'),
		// Отримуємо список значень(textContent) DOM-елементів
		[...btnNames] = buttons.map(el => {
			return el.textContent;
		});
	let key;
	// Якщо перші 3 букви Key то видаляємо їх для зручності порівнянь
	if (e.code.slice(0, 3) === 'Key') {
		key = e.code.slice(3);
	} else key = e.code;
	if (btnNames.includes(key)) {
		changeBtn(buttons, key);
	}
});