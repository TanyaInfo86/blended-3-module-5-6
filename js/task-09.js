//Сортування чисел за зростанням
//Дано масив чисел:
const numbers = [5, 2, 9, 11, 5, 6];
//Завдання: Використайте toSorted, щоб відсортувати числа за зростанням.
//Очікуваний результат:

//[1, 2, 5, 5, 6, 9]
const numbersSorted = numbers.toSorted((a,b) => a-b
) 
console.log(numbersSorted);
