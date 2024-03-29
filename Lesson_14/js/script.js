// Создайте функцию user, сделайте так чтобы функция выводила в консоль контекст.

function user() {
	return this;
}
console.log(user());

/*
Создайте обьект userOne, добавьте к нему свойства имя, фамилия, возраст и функцию, которая будет выводить
Привет! Я имя + фамилия  Выведите имя и фамилию пользователя с объекта userOne.
*/
const userOne = {
	name: 'Mukolka',
	surname: 'Zyev',
	age: '35',
	sayHi(phone = 'Невідомий номер') {
		const res = `Hello! I'm ${this.name} ${this.surname}, ${phone}.`;
		return res;
	}

};

//Сделайте так чтобы данное свойство 'name' нельзя было удалить.
// Команда для об'єкта userOne, властивості name - її не можна перезаписати, видалити і побачити в циклі
// Тобто властивість є незмінною.
Object.defineProperty(userOne, 'name', { writable: false, enumerable: false, configurable: false });

console.log(userOne.sayHi());

// Сделайте так, чтобы контекст в методе объекта userOne был глобальный объект window.

console.log(userOne.sayHi.bind(window)());

/* 
Создайте еще один объект userTwo и заполните его теми же свойствами, но без метода.
Выведите информацию с объекта userTwo используя метод объекта userOne.
*/

const userTwo = {
	name: 'Roman',
	surname: 'Vinokurov',
	age: '21'
};

// Три різні методи, суть роботи яких однакова, а різниця в комфорті використання.
console.log(userOne.sayHi.bind(userTwo, '+380994756298')());
console.log(userOne.sayHi.apply(userTwo, ['+380995647382']));
console.log(userOne.sayHi.call(userTwo, '+380995647382'));

/*
Создайте метод который будет умножать элементы массива на то число которое будет передавать пользователь.
Сделайте так, чтобы метод наследовался каждым массивом подобно методу pop().
*/

Array.prototype.arrayMul = function (num) {
	return this.map(el => {
		return el *= num;
	});
};
console.log([1, 2, 4, 5].arrayMul(4));

/*
Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так,
чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.
*/
const usedNumbers = [];
function randomNum() {
	function funcInner() {
		if (usedNumbers.length == 100) usedNumbers.splice(0);
		let i = Math.floor(Math.random() * 100) + 1;
		const result = usedNumbers.includes(i) ? funcInner() : (usedNumbers.push(i), i);
		return result;
	}
	return funcInner();

}
console.log(randomNum());
console.log(randomNum());
console.log(randomNum());