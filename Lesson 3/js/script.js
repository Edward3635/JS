const styles = ['Джаз', 'Блюз'];
document.write('<main class="main">');
document.write('<div class="main__content">');
document.write('<h2>Домашня робота</h2>');
document.write('<ul class="ul__homework">');
document.write("<li>Створено масив: [ '" + styles.join("', '") + "' ]</li>");

styles.push('Рок-н-ролл');

document.write("<li>Додано новий елемент в кінець масиву: [ '" + styles.join("', '") + "' ]</>");

if (styles.length % 2 != 0) {
	let mediumElement = (styles.length - 1) / 2;
	document.write('<li>Заміна значення ' +
		'<span class="span__underline">' + styles[mediumElement] + '</span>' +
		' в середнині масиву на "Класика"' + '</li>');
	styles.splice(mediumElement, 1, 'Класика');
	document.write("<li>Змінений масив: [ '" + styles.join("', '") + "' ]</li>");
} else {
	document.write('<li>Була спроба видалити середній елемент, та оскільки масив має парну кількість' +
		' елементів, середній елемент неможливо знайти.</li>');
}

document.write('<li>Видалено слово: ' + styles.shift() + '</li>');
document.write("<li>Змінений масив: [ '" + styles.join("', '") + "' ]</li>");

styles.splice(0, 0, 'Реп', 'Реггі');

document.write('<li>Додаємо 2 нових елементи на початок масиву: ' + styles[0] + ' та ' + styles[1] + '</li>');
document.write("<li>Змінений масив: [ '" + styles.join("', '") + "' ]</li>");
document.write('</ul>');


document.write('<h2>Додаткові завдання</h2>');
document.write('<ul class="ul__additional-work">');
document.write("<li>Нижче будуть використовуватися масиви const arrLetters = ['a', 'b', 'c'] <br>" +
	'та const arrNumbers =[1, 2, 3]</li>');

const arrLetters = ['a', 'b', 'c'];
const arrNumbers = [1, 2, 3];
let duplicateLetters1 = arrLetters.slice(0);
let duplicateNumbers1 = arrNumbers.slice(0);
document.write("<li>Даны два массива: ['a', 'b', 'c'] и  [1, 2, 3]. Объедините их вместе.</li>");
document.write('<li>arrLetters.concat(arrNumbers): ' + (duplicateLetters1.concat(duplicateNumbers1)).join(', ') + '</li>');

document.write("<li>Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.</li>");
duplicateLetters1.splice(3, 0, 1, 2, 3);
document.write('<li>arrLetters.splice(3, 0, 1, 2, 3): ' + duplicateLetters1.join(', ') + '</li>');

document.write('<li> Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. </li>');
document.write('<li>arrNumbers.reverse(): ' + (duplicateNumbers1.reverse()).join(', ') + '</li>');

document.write('<li>Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.</li>');
let duplicateNumbers2 = arrNumbers.slice(0);
duplicateNumbers2.splice(3, 0, 4, 5, 6);
document.write('<li>arrNumbers.splice(3, 0, 4, 5, 6): ' + duplicateNumbers2.join(', ') + '</li>');

document.write('<li>Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.</li>');
let duplicateNumbers3 = arrNumbers.slice(0);
duplicateNumbers3.splice(0, 0, 4, 5, 6);
document.write('<li>arrNumbers.splice(0, 0, 4, 5, 6): ' + duplicateNumbers3.join(', ') + '</li>');

document.write("<li>Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.</li>");
const arrWords = ['js', 'css', 'jq'];
document.write("<li>const arrWords = ['js', 'css', 'jq'];" +
	'<div class="second__line">arrWords[0]: ' + arrWords[0] + ';</div>' + '</li>');

document.write('<li>Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].</li>');
const arrMyNumbers = [1, 2, 3, 4, 5];
let copyArr1 = arrMyNumbers.slice(0, 3);
document.write('<li>const arrMyNumbers = [1, 2, 3, 4, 5];' +
	'<div class="second__line">let copyArr1 = arrMyNumbers.slice(0, 3);</div>' +
	'<div class="second__line"> console.write(copyArr1): ' + copyArr1 + '</div>' + '</li>');

document.write('<li>Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].</li>');
copyArr1 = arrMyNumbers.slice(0);
copyArr1.splice(1, 2);
document.write('<li>const arrMyNumbers = [1, 2, 3, 4, 5];' +
	'<div class="second__line">arrMyNumbers.splice(1, 2);</div>' +
	'<div class="second__line"> document.write(arrMyNumbers): ' + copyArr1 + '</div>' + '</li>');

document.write('<li>Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 2, 10, 3, 4, 5].</li>');
copyArr1 = arrMyNumbers.slice(0);
copyArr1.splice(2, 0, 10);
document.write('<li>const arrMyNumbers = [1, 2, 3, 4, 5];' +
	'<div class="second__line">arrMyNumbers.splice(2, 0, 10);</div>' +
	'<div class="second__line"> document.write(arrMyNumbers): ' + copyArr1 + '</div>' + '</li>');

document.write('<li>Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.</li>');
const arrMyNumbers2 = [3, 4, 1, 2, 7];
arrMyNumbers2.sort();
document.write('<li>arrMyNumbers2 = [3, 4, 1, 2, 7];' +
	'<div class="second__line">const arrMyNumbers2.sort(): ' + arrMyNumbers2 + '</div>' + '</li>');

document.write("<li>Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.</li>");
const arrHelloWorld = ['Привет, ', 'мир', '!'];
document.write("<li> const arrHelloWorld = ['Привет, ', 'мир', '!'];" +
	"<div class='second__line'>arrHelloWorld.join(''): " + arrHelloWorld.join('') + '</div>' + '</li>');

document.write("<li>Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').</li>");
arrHelloWorld.shift(0);
arrHelloWorld.unshift('Пока, ');
document.write("<li> const arrHelloWorld = ['Привет, ', 'мир', '!'];" +
	'<div class="second__line">arrHelloWorld.shift(0);</div>' +
	"<div class='second__line'>arrHelloWorld.unshift('Пока, ');</div>" +
	"<div class='second__line'>arrHelloWorld.join(''): " + arrHelloWorld.join('') + '</div>' + '</li>');

document.write('<li>Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.</li>');
const arrFirstWay = [1, 2, 3, 4, 5];
const arrSecondWay = new Array([1, 2, 3, 4, 5]);
document.write('<li>const arrFirstWay  =[1, 2, 3, 4, 5];' +
	'<div class="second__line">const arrSecondWay = new Array([1, 2, 3, 4, 5]);</div>' +
	'<div class="second__line">document.write(arrFirstWay): ' + arrFirstWay + ';</div>' +
	'<div class="second__line">document.write(arrSecondWay): ' + arrSecondWay + ';</div>' + '</li>');

document.write('<li>Дан многомерный массив arr. ' + "Выведите с его помощью слово 'голубой' 'blue'." +
	'<div class="arr__img1"></div>' + '</li>');
var arr = {
	'ru': ['голубой', 'красный', 'зеленый'],
	'en': ['blue', 'red', 'green']
};
document.write('<li>var arr = {' +
	'<div class="li__objects">' + "'ru':  ['голубой', 'красный', 'зеленый'], " + '</div>' +
	'<div class="li__objects">' + "'en': ['blue', 'red', 'green'] " + '</div>' +
	'<div class="second__line">document.write(arr.ru[0] + ", ", arr.en[0]): ' +
	arr.ru[0] + ', ', arr.en[0] + '</div>' + '</li>');

document.write("<li>Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.</li>");
const myArr = ['a', 'b', 'c', 'd'];

document.write("<li>const myArr = ['a', 'b', 'c', 'd'];" + '</li>');

document.write('<li>Запросите у пользователя количество элементов массива. Исходя из данных которые ввел пользователь создайте массив на то количество элементов которое передал пользователь. В каждом индексе массива храните чило которе будет показывать номер элемента массива.</li>');
let amountNumbers = eternalPrompt();
const arrayNumbers = [];
for (let i = 0; i < amountNumbers; i++) {
	arrayNumbers[i] = i;
}
document.write('<li> Пользователь ввёл число ' + amountNumbers +
	'<div class="second__line">const arrayNumbers = [];</div>' +
	'<div class="second__line">for (let i = 0; i < amountNumbers; i++) {</div>' +
	'<div class="li__objects">arrayNumbers[i] = i;</div>' +
	'<div class="second__line">}</div>' +
	'<div class="second__line">' + "document.write(arrayNumbers.join(', ')): " +
	arrayNumbers.join(', ') + '</div>' + '</li>');

document.write('<li>Сделайте так, чтобы из массива который вы создали выше вывелись все нечетные числа в параграфе, а четные в спане с красным фоном.</li>');
let odd = '', even = '';
for (let i = 0; i < arrayNumbers.length; i++) {
	if (arrayNumbers[i] % 2 === 0) {
		even += arrayNumbers[i] + '; ';
	} else {
		odd += arrayNumbers[i] + '; ';
	}
}
document.write("<li>let odd = '', even = '';" +
	'<div class="second__line">for (let i = 0; i < arrayNumbers.length; i++) {</div>' +
	'<div class="li__objects">if (arrayNumbers[i] % 2 === 0) {</div>' +
	'<div class="li__nesting">even += arrayNumbers[i] + "; ";</div>' +
	'<div class="li__objects">} else {</div>' +
	'<div class="li__nesting">odd += arrayNumbers[i] + "; ";</div>' +
	'<div class="li__objects">}</div>' +
	'<div class="second__line">}</div>' +
	'<div class="second__line">document.write(odd); // в тезі p</div>' +
	'<div class="second__line">document.write(even) // в тезі span;</div>' +
	'<p class="second__line paragraph">Непарні числа: ' + odd + '</p>' +
	'<span class="second__line span__red">Парні числа: ' + even + '</span>' +
	'</li>');

document.write('<li>Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.' + '<div class="arr__img2"></div>' + '</li>');
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let str1 = vegetables.join(', ');
document.write('<li>' + "var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];" +
	'<div class="second__line">let str1 = vegetables.join(', ');</div>' +
	'<div class="second__line">document.write(str1): ' + str1 + ';</div>' +
'</li>');

document.write('</ul>');
document.write('</div>');
document.write('</main>');

function eternalPrompt() {
	for (; ;) {
		let amountNumbers = prompt('Уведи кількість чисел масиву, і не намагайся відмінити😄 ', '15');
		if (amountNumbers === null) {
			alert('Не лінися, введи якесь число.');

		} else if (amountNumbers.replace(/\d/g, '').length) {
			alert('Уведено не лише цифри, або цифри взагалі не введено!');
		} else {
			return amountNumbers;
		}
	}
}