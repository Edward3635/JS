const arr = [1, 2, 3, 4, 5, 6];
const duplicate = arr => [...arr, ...arr];
console.log(duplicate([1, 2, 3, 4, 5]));
console.log(duplicate(arr));