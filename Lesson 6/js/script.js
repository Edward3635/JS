// Classwork

// Homework 1.1
// Constructor
function Human(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}
// Створення об'єктів через конструктор
let human1 = new Human('Josh', 'man', 13), human2 = new Human('Steve', 'man', 19), human3 = new Human('Margot', 'woman', 41),
	human4 = new Human('Barry', 'man', 25), human5 = new Human('Monika', 'woman', 22), human6 = new Human('Johny', 'man', 8),
	human7 = new Human('Stella', 'woman', 81), human8 = new Human('Amelia', 'woman', 16),
	human9 = new Human('Isabella', 'woman', 55);

// Array
const humanArr = [
	human1, human2, human3, human4, human5, human6, human7, human8, human9];
console.log(humanArr);

function sortByAge(arr) {
	arr.sort((a, b) => a.age > b.age ? 1 : -1);
	console.log(arr);
}
sortByAge(humanArr);

// Homework 1.2
