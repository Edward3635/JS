let myDocument = {
	header: 0,
	body: '',
	footer: 0,
	data: '',
	'Приложение': {
		header: { navigation: '', search: '', burger: '' },
		body: { main: '', container: '', content: '' },
		footer: { container: '', content: '', contact: '' },
		data: { name: '', surname: '', age: '' }
	}

};

//let test = 666;
//Функція на перевірку об'єкту і заповнення його числами
function fillObject(obj) {
	let i = 1; // лічильник
	if (obj.constructor === Object) { //перевірка чи на об'єкт
		for (const key in obj) {
			if (typeof obj[key] === 'object') { // перевірка на об'єкт ключа всередині об'єкту
				fillObject(obj[key]); // Самовиклик
			} else {
				obj[key] = i++; // якщо не об'єкт то присвоїти ключу значення 'i'
			}
		}
		return obj;
	} else {
		return "Аргументом функції fillObjects має бути об'єкт";
	}
}
console.log(fillObject(myDocument)); //виклик функції
document.getElementsByClassName('main__content')[0].innerHTML = test(myDocument);

function test(obj) {
	let i = '', j = '', c = '';
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			c += key + ': ';
			test(obj[key]);
		} else {
			i = key + ': ';
			j = obj[key] + ';<br>';
			c += i + j;
		}
	}
	return c;
}