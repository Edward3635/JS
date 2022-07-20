// Оголошення змінних та стрілкових функцій.
/// Користувацька функція для отримання елементу сторінки по id/class/tag.
const getSelector = arg => document.querySelector(arg);

/*
Створити форму для реєстрації покупця: 1)Ім'я мінімум 2 літери латиниця; 2)Фамілія мінімум 2 літери кирилиця; 3)Вік число;
	4)Телефон +38; 5)Індекс число; 6)Та статус за замовчуванням "активний клієнт";
Клієнт вводить дані про себе і ми перевіряємо їх на правильність.
Дані які ввів клієнт ми зберігаємо в браузері, та після збереження показуємо дані на сторінці у вигляді таблиці,
де мають бути показані тільки діючі клієнти.
*/