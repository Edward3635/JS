//classwork
//calculator
let a, b, operator;
for (; ;) {
	a = prompt('a = ', '0');
	if (a.replace(/\d/g, '').length) {
		alert('Введено не лише числа, або числа не введено взагалі!');
	} else {
		b = prompt('b = ', '0');
		if (b.replace(/\d/g, '').length) {
			alert('Введено не лише числа, або числа не введено взагалі!');
		} else {
			operator = prompt('Оберіть метод обчислення: +, -, /, *. ', '+');
			if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
				break;
			} else {
				alert('Некорректний ввід, уведіть: +, -, * або /');
			}
		}
	}
}

calculate(a, b, operator);

function add(a = 0, b = 0) {
	return Number(a) + Number(b);
}

function minus(a = 0, b = 0) {
	return a - b;
}

function multiply(a = 0, b = 0) {
	return a * b;
}

function division(a = 0, b = 0) {
	return a / b;
}

function calculate(a, b, fn) {
	switch (fn) {
		case '*':
			return alert(multiply(a, b));

		case '/':
			return Number(b) === 0 ? alert('Так не працює --__--') : alert(division(a, b));

		case '+':
			return alert(add(a, b));

		case '-':
			return alert(minus(a, b));

		default:
			return alert('Oops! Error! o_0');

	}
}

//homework
//task 1
function map(fn, array) {
	let myVariable = array.fn();
	return myVariable;
}
let myArr = [1, 2, 3, 4, 5, 6];
console.log(map(myArr));

//task 2.1
const checkAge = age => age > 18 ? true : confirm('Батьки дозволили?');
checkAge(3);

//task 2.2
function checkAge2(age) {
	return (age > 18) || confirm('Батьки дозволили?');
}
checkAge2(4);