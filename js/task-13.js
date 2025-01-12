//Перетворення вкладеного масиву
//Дано вкладений масив:

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//Завдання: Використайте map, щоб створити новий масив, де кожен вкладений масив буде перетворено на суму його елементів.
//Очікуваний результат:

const newArr = nestedArray.map((item) => item[0] + item[1]);

console.log(newArr);

//[3, 7, 11]
