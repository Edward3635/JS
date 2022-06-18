// Classwork

function Calculator(x = 2, y = 15) {
	this.x = x;
	this.y = y;
}
Calculator.prototype.read = function () {
	this.x = Number(prompt('Перше значення: ', this.x));
	this.y = Number(prompt('Друге значення: ', this.y));
};
Calculator.prototype.sum = function (x, y) {
	return this.x + this.y;
};
Calculator.prototype.mul = function (x, y) {
	return this.x * this.y;
};
const calc = new Calculator();
calc.read();
console.log(calc.sum());
console.log(calc.mul());

// Homework 1.1
// Функція-конструктор
function Human(name = 'Jennifer', gender = 'female', age = 45) {
	// Це все властивості рівня екземпляр, вони дублюються в кожному екземплярі конструктора Human
	this.name = name;
	this.gender = gender;
	this.age = age;
}

// Масив екземплярів
const humanArr = [new Human('Josh', 'male', 13), new Human('Steve', 'male', 19), new Human('Margot', 'female', 41),
new Human('Barry', 'male', 25), new Human('Monika', 'female', 22), new Human('Johny', 'male', 8),
new Human('Stella', 'female', 25), new Human('Amelia', 'female', 16), new Human('Isabella', 'female', 55)];

console.log("Масив об'єктів, до сортування:", humanArr);

console.log("Масив об'єктів, після сортування значень Age в порядку зростання:", sortByAge(humanArr));

// Функція сортування значень Age в порядку зростання
function sortByAge(arr) {
	let copyArr = arr.slice();
	copyArr.sort((a, b) => a.age > b.age ? 1 : -1);
	return copyArr;
}

// Homework 1.2
// Функція-конструктор, що створює об'єкт Human вже існує
// Методи рівня екземпляру будуть дублюватися в усіх об'єктах, створених через функцію і займатимуть багато пам'яті.
// Тому усі методи виносяться за межі конструктора і потім викликається той чи інший метод
// для ініціатору виклику - екземпляру, який в цьому потребує.
// Властивості зазвичай пишуться в на рівні екземпляру, але вони також можуть писатися у прототипі,
// якщо властивість додається лише певним об'єктам.
// Властивості та методи функції-конструктора являються статичними і вони не наслідуються.


Human.hobby = 'Бокс'; // Властивість - рівень конструктора, але цю властивість не побачать екземпляри

// Метод - рівня конструктор
Human.createHuman = function (name, gender, age) {
	return new Human(name, gender, age);
};

// Метод прототипу
Human.prototype.hello = function () {
	let hello = `Привіт, моє ім'я - ${this.name}, мені ${this.age} років, давай знайомитись! Як тебе звати?`;
	return hello;
};
Human.prototype.hobby = 'Хокей';

console.log('');
console.log(`${humanArr[7].name} обожнює ${humanArr[7].hobby}! А Бокс, на жаль, ні!`);
console.log('');
// Ініціалізація виклику методу hello() із прототипу екземпляром класу Human
console.log(humanArr[4].hello()); //Привіт, моє ім'я - Josh, мені 13 років, давай знайомитись! Як тебе звати?
console.log('');
// Виклик методу рівня конструктор , в якому викликається метод hello() із прототипу.
// Аргументів не задано, отже будуть задані конструктором
console.log(Human.createHuman().hello()); // Привіт, моє ім'я - Jennifer, мені 45 років, давай знайомитись! Як тебе звати?
console.log('');

