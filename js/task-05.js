// Найбільше число в масиві
//Дано масив чисел:

const numbers = [10, 25, 48, 7, 32, 18];
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48
const number = numbers.reduce((acc, item) => {
    if (item > acc) {
        acc = item;
    }
    return acc;
}, 0);

console.log(number);
