let login, pin, Yes, True = 1;

while (True) {
	Yes = 5;
	login = prompt('Логін:', 'Адмін');
	if (login === 'Адмін') {
		while (Yes) {
			pin = prompt('Пароль', 'Володар');
			if (pin === 'Володар') {
				alert('Ласкаво просимо');
				Yes = 0;
				True = 0;

			} else if (pin === null) {
				True = 0;
				Yes = 0;
				alert('Вхід відмінено');

			} else {
				Yes--;
				alert(`Пароль невірний! Лишилось спроб: ${Yes}`);

			}
		}
	} else if (login === null) {
		True = 0;
		alert('Вхід відмінено');

	} else {
		alert('Такого логіна не існує!');

	}
}
document.write('<div class="rectangle">');
for (let i = 0; i < 25; i++) {
	for (let j = 0; j < 110; j++) {
		document.write('*');
	}
	document.write('<br>');
}
document.write('</div>');












