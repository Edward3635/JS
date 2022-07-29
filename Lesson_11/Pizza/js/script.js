// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg), pizzaSize = getSelector('#pizza'),
	pizzaIngridients = getSelector('.ingridients'), table = getSelector('.table');
let sauceOrToppingSum = 0;

/*
Создать сайт по заказу пиццы используя семантическую верстку.
На сайте должна быть возможность сделать пиццу самому.
При создании пиццы пользователь выбирает ингредиенты и размер пиццы:
- маленькая
- средняя
- большая
Ингредиенты ( сыр, пепперони, перец, кукуруза, ананасы и т.д) и также 3 вида соуса. 
При создании пиццы цена увеличивается. Все ингредиенты и коржи должны быть в виде картинок и 
накладываются друг на друга при выборе. В конце принять от пользователя телефон, email, имя и проверить на правильность введения.После чего весь результат заказа отправить на почту.
Так же создайте банер получить скидку на пиццу 30% и сделайте чтобы банер от курсора пользователя убегал.
*/

pizzaListeners();

function pizzaListeners() {
	pizzaSize.addEventListener('change', (e) => {
		if (!e.target.classList.contains('radioIn')) {
			return;
		}
		calcPrice();
	});
	const dragStartListener = e => {
		if (e.target.tagName !== 'IMG') return;
		if (!e.target.classList.contains('draggable')) return;
		e.target.style.border = '3px dotted #000';
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('Text', e.target.id);

		addOrRemoveListeners('add');
	},
		dragEndListener = e => {
			e.target.style.border = '';


			addOrRemoveListeners('remove');
		},
		dragEnterListener = e => {
			e.target.style.border = '3px solid gold';
		},
		dragLeaveListener = e => {
			e.target.style.border = '';
		},
		dragOverListener = e => {
			if (e.preventDefault) e.preventDefault();
			return false;
		},
		dropListener = e => {
			if (e.preventDefault) e.preventDefault();
			if (e.stopPropagation) e.stopPropagation();

			e.target.style.border = '';
			const id = e.dataTransfer.getData('Text');
			let elem = document.getElementById(id);

			if (elem !== null) {
				elem.draggable = false;
				elem.style.border = '';
				elem.style.pointerEvents = 'none';
				const elemClone = elem.cloneNode(true);
				table.append(elemClone);
				calcPrice(calcSauceAndTopping(elem));
			}

			return false;
		},
		addOrRemoveListeners = (arg) => {
			switch (arg) {
				case 'add':
					pizzaIngridients.addEventListener('dragend', dragEndListener, false);
					table.addEventListener('dragenter', dragEnterListener, false);
					table.addEventListener('dragleave', dragLeaveListener, false);
					table.addEventListener('dragover', dragOverListener, false);
					table.addEventListener('drop', dropListener, false);
					break;
				case 'remove':
					pizzaIngridients.removeEventListener('dragend', dragEndListener, false);
					table.removeEventListener('dragenter', dragEnterListener, false);
					table.removeEventListener('dragleave', dragLeaveListener, false);
					table.removeEventListener('dragover', dragOverListener, false);
					table.removeEventListener('drop', dropListener, false);
					break;
				default:
					break;
			}
		};


	pizzaIngridients.addEventListener('dragstart', dragStartListener, false);


}
function calcPrice(sauceOrTopping) {
	const pizzaPrice = getSelector('.price__counter');
	if (typeof sauceOrTopping === 'number') {
		sauceOrToppingSum += sauceOrTopping;
		pizzaPrice.textContent = `${parseFloat(pizzaPrice.textContent) + sauceOrTopping} грн`;
		return;

	}
	let res = calcSize() + sauceOrToppingSum;
	pizzaPrice.textContent = `${res} грн`;
}
function calcSize() {
	const [...sizeInputs] = document.querySelectorAll('#pizza input');

	const [pizzaSize] = sizeInputs.filter(el => {
		if (el.checked === true) {
			return el;
		}
	});
	switch (pizzaSize.value) {
		case 'small': return 80;
		case 'mid': return 100;
		case 'big': return 120;

		default:
			break;
	}
}
function calcSauceAndTopping(arg) {
	if (arg.classList.contains('topping')) {
		showTopping(arg.alt);
		switch (arg.alt) {
			case 'Сир звичайний': return 10;
			case 'Сир Фета': return 20;
			case 'Моцарелла': return 15;
			case 'Телятина': return 20;
			case 'Помідори': return 15;
			case 'Гриби': return 20;
			default: break;
		}
	} else {
		showSauce(arg.alt);
		switch (arg.alt) {
			case 'Кетчуп': return 10;
			case 'BBQ': return 20;
			case 'Рікотта': return 15;
			default: break;
		}
	}
}
function showTopping(name) {
	const toppingName = getSelector('.topings');
	toppingName.insertAdjacentHTML('beforeend', `<p>${name}</p>`);
}
function showSauce(name) {
	const sauceName = getSelector('.sauces');
	sauceName.insertAdjacentHTML('beforeend', `<p>${name}</p>`);
}
