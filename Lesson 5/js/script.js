let myDocument = {
	header: 0,
	body: '',
	footer: 0,
	data: '',
	Приложение: {
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
//Функція відображення обьекту
function display(obj) {
	let i = '';
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			i += `${key}: <br> ${display(obj[key])} <br>`;
		} else {
			i += `${key}: ${obj[key]}; `;
		}
	}
	return i;
}



console.log(fillObject(myDocument)); //виклик функції, що заповнює ключі обьекту, в консольку
document.getElementsByClassName('main__content')[0].innerHTML = display(myDocument); //Знаходимо елемент html по класу і додаємо
// туди текст, оброблений через функцію display(obj)


const cryptoWallet = {
	name: prompt("Вкажіть ім'я", 'Борис'),
	Bitcoin: {
		name: 'Біток',
		logo: '<img src="./img/bit.png" width=30px alt="logo">',
		balance: 1,
		exchange: 890655.18
	},
	Ethernum: {
		name: 'Етернум',
		logo: '<img src="./img/eth.png"  width=30px alt="logo">',
		balance: 26,
		exchange: 52635.92
	},
	Stellar: {
		name: 'Стелар',
		logo: '<img src="./img/st.png"  width=30px alt="logo">',
		balance: 524,
		exchange: 4
	},
	myFunc: function func(cryptoName) {
		let x = (` Добрий день ${this.name}, на вашому балансі ${this[cryptoName].balance}${this[cryptoName].logo},
		якщо продасте їх, то отримаєте ${this[cryptoName].balance * this[cryptoName].exchange} грн.`);
		document.getElementsByClassName('classwork__task')[0].innerHTML = x;
	}

};
cryptoWallet.myFunc(prompt('Введіть валюту: Bitcoin, Stellar, Ethernum', 'Stellar'));

