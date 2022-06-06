//classwork

//calculator
let a, b, operator;
//Нескінченний цикл для отримання коректних даних
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



//additional work

// task 1
function dayOfWeek(num) {
	switch (num) {
		case 1:
			return console.log('Понеділок');
		case 2:
			return console.log('Вівторок');
		case 3:
			return console.log('Середа');
		case 4:
			return console.log('Четвер');
		case 5:
			return console.log("П'ятниця");
		case 6:
			return console.log('Субота');
		case 7:
			return console.log('Неділя');

		default:
			return console.log('Error!');
	}
}
dayOfWeek(1);

//task 2
let textHello = 'var_text_hello';

function replaceAt(variable, del, replace) {
	let output = '';
	for (let i = 0; i < variable.length; i++) {
		if (variable[i] === del) {
			output += replace; //елемент що заміняє попередній.
		} else {
			output += variable[i];
		}
	}
	return output;
}

function varToArr(variable) {
	variable = variable.toUpperCase();
	return variable;
}

console.log(varToArr(replaceAt(textHello, '_', ', ')));

//task 3
// arr - масив, x - кількість 'x' в масиві
function fillArr(array, x) {
	if (Array.isArray(array) === true) {
		for (let i = 0; i < x; i++) {
			array[i] = 'x';
		}
		return array;
	} else {
		return console.log('Першим аргументом має бути масив, а другим кількість іксів!');
	}
}
const myArr1 = [];
console.log(fillArr(myArr1, 10));


//task 4
//Просто генерація масиву
function createArr(x) {
	let arr = [];
	for (let i = 0; i < x; i++) {
		arr[i] = i;
	}
	return arr;
}
//Тут може здатися складно, але все просто:
//sortOddEven головна функція яка в залежності від слова обирає сортування масиву парні\непарні числа
//Головна функція містить в собі підфункції oddNumbers та evenNumbers
//Їх суть я пояснив - це лише види сортування
//На вхід іде масив та ключове слово для сортування even - парне сортування, odd - непарне відповідно.
function sortOddEven(arr, word) {
	let i = 0, oddNumberRes = '', evenNumberRes = '';
	function oddNumbers(arr) {
		if (arr[i] < arr.length) {
			if (arr[i] % 2 === 0) {
				i++;
				oddNumbers(arr);
			} else {
				oddNumberRes += arr[i] + '; ';
				i++;
				oddNumbers(arr);
			}
		}
		i = 0;
		return oddNumberRes;
	}
	function evenNumbers(arr) {
		if (arr[i] < arr.length) {
			if (arr[i] % 2 === 0) {
				evenNumberRes += arr[i] + '; ';
				i++;
				evenNumbers(arr);
			} else {
				i++;
				evenNumbers(arr);
			}
		}
		i = 0;
		return evenNumberRes;
	}
	switch (word) {
		case 'even':
			return evenNumbers(arr);
		case 'odd':
			return oddNumbers(arr);

		default:
			return console.log('Перший аргумент масив, а другий аргумент even або odd');
	}
}

document.write('<main class="main">');
document.write('<div class="content">');

document.write('<div class="block">Згенерований масив функцією: <br>' + createArr(50) + ';' + '</div>');
document.write('<p class="block">Непарні числа:<br>' + sortOddEven(createArr(50), 'odd') + '</p>');
document.write('<div class="block">Парні числа:<br>' + sortOddEven(createArr(50), 'even') + '</div>');
document.write('</div>');
document.write('</main>');

//task 5
function exclamationFunc(a, b) {
	if (a > 0) {
		b = function () {	//функціональний вираз
			console.log('!');
		};
	} else {
		b = function () {	//функціональний вираз
			console.log('!!');
		};
	}
	return b();
}
let ggg;
a = 7;
exclamationFunc(a, ggg);

//task 6
//calculator уже був написаний вище, як класна робота  ^_^
//task 7
function ggg2(a, b) {
	return a() + b();
}
console.log(
	ggg2(
		function () { return 3; },// анонімна функція, оголошена локально і зовні не викликається
		function () { return 4; } // анонімна функція, оголошена локально і зовні не викликається
	)
);

//task 8
function countFunc() {
	let count = 0;
	return function () {
		return console.log(`Мене викликали уже разів ${++count}`);
	};
}
let callCountFunc = countFunc();
console.log(callCountFunc()); // Мене викликали уже разів 1 
console.log(callCountFunc()); // Мене викликали уже разів 2 
console.log(callCountFunc()); // Мене викликали уже разів 3 