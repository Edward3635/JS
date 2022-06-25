// 1.Виселица

const words = ['apple', 'banana', 'pineapple', 'plum', 'grape', 'orange'];

//startGame();

function startGame() {
	let start = confirm('Привет!\nЭто игра Виселица и тебе нужно отгадать загаданное мною слово. Играешь?');
	if (start === true) {
		game();
	}
}

function game() {
	let count = 6;
	let word = words[Math.floor(Math.random() * words.length)];
	let remainingLetters = word.length;
	let arrayAnswer = new Array(word.length);
	for (let i = 0; i < arrayAnswer.length; i++) {
		arrayAnswer[i] = (' _ ');
	}

	while (remainingLetters > 0 && count > 0) {
		alert(`Осталось попыток ${count}.\n ${arrayAnswer.join(' ')}`);
		let guess = prompt('Угадайте букву или нажмите Отмена для выхода.');
		if (guess === null) {
			alert('Приходи ещё!');
			break;
		} else if (guess.length !== 1 || guess === ' ') {
			alert('Пожалуйста, введите одну букву!');
		} else {
			let fail = false;
			let alreadyGuess = false;
			for (let j = 0; j < word.length; j++) {
				if (word[j] === guess.toLocaleLowerCase()) {
					if (arrayAnswer[j] === ' _ ') {
						arrayAnswer[j] = guess.toLocaleLowerCase();
						remainingLetters--;
						fail = true;
					}
					else {
						alreadyGuess = true;
						fail = true;

					}
				}
			}
			if (alreadyGuess === true) {
				alert('Буква уже угадана!');
			}
			if (fail === false) {
				count--;
				alert('Такой буквы нет!');

			}
		}

	}

	if (remainingLetters === 0) {
		alert(arrayAnswer.join(' '));
		alert(`Отлично! Было загадано слово ${word}`);
		count = 6;
		let next = confirm('Идем дальше?');

		if (next === true) {
			game();
		} else {
			alert('До скорой встречи!');


		}
	} else if (count === 0) {
		alert(`Попыток больше нет! Ответ: ${word}`);
		count = 6;
		let next = confirm('Идем дальше?');

		if (next === true) {
			game();
		} else {
			alert('До скорой встречи!');

		}

	}
}

/* 2-3.
Реализовать функцию для создания объекта "пользователь".
Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
При вызове функция должна спросить у вызывающего имя и фамилию.
Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя,
соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). 
Вывести в консоль результат выполнения функции.

Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.
Возьмите выполненное задание выше (созданная вами функция createNewUser()) и дополните ее следующим функционалом:
При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.
Создать метод getAge() который будет возвращать сколько пользователю лет.
Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, 
соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).
Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.
*/
class CreateNewUser {
	constructor(firstName, lastName, birthday) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;
	}
	getLogin() {
		return `${this.firstName.charAt(0).toLocaleLowerCase()}${this.lastName.toLocaleLowerCase()}`;
	}
	getAge() {
		return new Date().getFullYear() - this.birthday.split('.')[2];
	}
	getPassword() {
		let firstLetter = this.firstName.charAt(0).toLocaleUpperCase(),
			lastName = this.lastName.toLocaleLowerCase(), yeatBirthday = this.birthday.split('.')[2];
		return ` Your password is '${firstLetter}${lastName}${yeatBirthday}'`;
	}
}
const newUser = new CreateNewUser(prompt('First name:', 'Lucas'), prompt('Last name:', 'Wong'),
	prompt('Your birthday (dd.mm.yyy):', '04.10.2001'));
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());


/* 4.
Реализовать функцию фильтра массива по указанному типу данных.
Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив,
который будет содержать в себе любые данные, второй аргумент - тип данных.
Функция должна вернуть новый массив, который будет содержать в себе все данные,
которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом.
То есть, если передать массив ['hello', 'world', 23, '23', null],
и вторым аргументом передать 'string', то функция вернет массив [23, null].
*/

function filterBy(arr, dataType) {
	arr = arr.filter(item => typeof (item) !== dataType);
	return arr;
}
const myArray = [1, 'tower', 3, 4, 'castle', 6, 'heaven', 8];
console.log(`Массив до фильтрации: ${myArray}`);
console.log(`Массив после фильтрации: ${filterBy(myArray, 'number')}`);

