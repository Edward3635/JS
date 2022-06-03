let a = parseFloat(prompt('Завдання 1, введіть число для змінної. \n a = ', '3')),
	b = parseFloat(prompt('Введіть число для змінної. \n b = ', '3')),
	result, True = 1;
a + b < 4 ? result = 'Мало' : result = 'Багато';
alert(result);

var message,
	login = prompt('Завдання 2, оберіть варіант логіну: \n 1)Василько \n 2)Директор', 'Василько');

login === 'Василько' ? message = 'Привіт!' :
	login == 'Директор' ? message = 'Здрастуйте' :
		login == '' ? message = 'Немає логіну' :
			message = '';
alert(message);


while (True) {
	while (True) {
		a = prompt('Введіть наступні 2 числа: А та B, де А < В. \n' +
			'І навіть не намагайтеся писати букви, приймаються лише числа))) \n A = ', '8');
		if (a.replace(/\d/g, '').length) {
			alert('Уведено не лише цифри, або цифри взагалі не введено!');
		} else {
			True = 0;
		}
	}
	True = 1;
	while (True) {
		b = prompt("Чудово! Пам'ятайте, B>A, \n B = ", '27');
		if (b.replace(/\d/g, '').length) {
			alert('Уведено не лише цифри, або цифри взагалі не введено!');
		} else {
			True = 0;
		}
	}
	True = 1;
	Number(a) > Number(b) ? alert(`Помилка! Число ${a} більше за число ${b} ДУРНА ТИ ГОЛОВА!`) :
		True = 0;
}
let sum = 0, sumPrint = '', odd = '', numberQuantity = b - a - 1;
a = Number(a);
b = Number(b);
document.write('<main class="main">');
document.write('<div class="block">');
document.write(`<h4>Числовий проміжок від ${a} до ${b}</h4>`);
document.write('<h4>Кількість чисел: ' + numberQuantity + ';' + '</h4>');
for (let i = a + 1; i < b; i++) {
	sum += i;
	sumPrint += i;
	if (i != b - 1) {
		sumPrint += ' + ';
	}
	if (i % 2 != 0) {
		odd += i + '; ';
	}

}
document.write('<h4>' + ' ' + sumPrint + ' = ' + sum + ';' + '</h4>');
document.write(`<h4>Усі непарні числа: ${odd}</h4>`);
document.write('</div>');

document.write('<div class="rectangle">');
document.write('<h5>Прямокутник</h5>');
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 40; j++) {
		document.write('*');
	}
	document.write('<br>');
}
document.write('</div>');

document.write('<div class="equilateral__triangle">');
document.write('<h5>Рівносторонній трикутник</h5>');
myTriangle();
document.write('</div>');

document.write('<div class="right__triangle">');
document.write('<h5>Прямокутний трикутник</h5>');
myTriangle();
document.write('</div>');

document.write('<div class="rhombus">');
document.write('<h5>Ромб</h5>');
myRhombus();
document.write('</div>');

document.write('</main>');


function myTriangle() {
	for (let i = 1; i <= 15; i++) {
		for (let j = 1; j <= i; j++) {
			document.write('*');
		}
		document.write('<br>');
	}
}
function myRhombus() {
	for (let i = 1; i <= 10; i++) {
		for (let j = 1; j <= i; j++) {
			document.write('*');

		}
		document.write('<br>');
	}
	for (let i = 10; i >= 1; i--) {
		for (let j = 1; j <= i; j++) {
			document.write('*');
		}
		document.write('<br>');
	}
}
