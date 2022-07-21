// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg);

/*
Створити форму для реєстрації покупця:
1)Ім'я мінімум 2 літери латиниця;
2)Фамілія мінімум 2 літери кирилиця;
3)Вік число;
4)Телефон +38;
5)Індекс число;
6)Та статус за замовчуванням "активний клієнт";
Клієнт вводить дані про себе і ми перевіряємо їх на правильність.
Дані які ввів клієнт ми зберігаємо в браузері, та після збереження показуємо дані на сторінці у вигляді таблиці,
де мають бути показані тільки діючі клієнти.
*/

const mainForm = getSelector('.main__form');
mainForm.addEventListener('change', (e) => {
	//Validate(e.target);
	if (!Validate(e.target)) {
		e.target.insertAdjacentHTML('beforebegin', '<span class="mistake">Невірно вказані дані!</span>');
		e.target.style.border = '2px solid red';
	} else {
		if (getSelector('.mistake')) {
			e.target.style = '';
			getSelector('.mistake').remove();
		}
	}

});

function Validate(target) {
	switch (target.id) {
		case 'name': return /^[A-z]{2,}$/i.test(target.value);
		case 'surname': return /^[А-я/і/ї/є]{2,}$/i.test(target.value);
		case 'age': return /^\d{1,2}$/i.test(target.value);
		case 'tel': return /^\+380\d{9}$/i.test(target.value);
		case 'index': return /^\d{5}$/i.test(target.value);
		default:
			throw new Error('Невірний виклик регулярного виразу');
	}
}
localStorage.user = JSON.stringify([]);
const btnSave = getSelector('input[type="button"]');

btnSave.addEventListener('click', (e) => {
	const [...arrInputs] = document.querySelectorAll('.main__form > input:not(input[type="button"])');
	const res = arrInputs.map(el => {
		return Validate(el);
	});
	if (!res.includes(false)) {
		localStorage.user = JSON.stringify([]);
		let userData = JSON.parse(localStorage.user);
		userData.push(
			new User(
				...arrInputs.map(el => {
					return el.value;
				})));
		localStorage.user = JSON.stringify(userData);
		arrInputs.forEach(el => el.value = '');
		if (!getSelector('.grid__data')) {
			createGrid();
		}
		createUserList();
	} else {
		e.target.insertAdjacentHTML('beforebegin', '<span class="mistake__save">Потрібно коректно заповнити всі поля!</span>');
		setTimeout(() => {
			getSelector('.mistake__save').remove();
		}, 5000);
	}
});
class User {
	constructor(name, surname, age, phone, index) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.phone = phone;
		this.index = index;
		this.name = name;
		this.status = true;
	}
}

function createUserList() {
	const currentUsers = JSON.parse(localStorage.user), gridData = getSelector('.grid__data');
	currentUsers.forEach(el => {
		gridData.insertAdjacentHTML('beforeend', `<div>${el.name}</div><div>${el.surname}</div><div>${el.age}</div>` +
			`<div>${el.phone}</div><div>${el.index}</div>`);
		if (el.status) {
			gridData.insertAdjacentHTML('beforeend', '<div><input type ="checkbox" checked></div>');
		} else {
			gridData.insertAdjacentHTML('beforeend', '<div><input type ="checkbox"></div>');
		}
	});
}

function createGrid() {
	getSelector('.main__form').insertAdjacentHTML('afterend', '<div class="grid__data"><div>Name</div><div>Surname</div>' +
		'<div>Age</div><div>Phone</div><div>Index</div><div>Status</div></div>');
}
