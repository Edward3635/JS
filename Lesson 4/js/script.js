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

//function call
calculate(a, b, operator);

// '+'
function add(a = 0, b = 0) {
	return Number(a) + Number(b);
}
// '-' 
function minus(a = 0, b = 0) {
	return a - b;
}
// '*'
function multiply(a = 0, b = 0) {
	return a * b;
}
// '/'
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
let myArr = [5, 2, 7, 10, 11, 4];
console.log(map(arrSortCall, myArr));
function arrSort(a, b) {
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}
function arrSortCall(arr) {
	return arr.sort(arrSort);
}

function map(fn, array) {
	if (Array.isArray(array) === true) {
		let copyArr = array.slice(0);
		return fn(copyArr);
	} else {
		return console.log('Першим аргументом має бути функція, а другим - масив!');
	}
}

//task 2.1
const checkAge = age => age > 18 ? true : confirm('Батьки дозволили?');
checkAge(3);

//task 2.2
function checkAge2(age) {
	return (age > 18) || confirm('Батьки дозволили?');
}
checkAge2(4);