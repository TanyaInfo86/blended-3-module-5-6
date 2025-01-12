//Підрахунок кількості повторень
//Дано масив:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
 // apple: 3,
 // banana: 2,
 // orange: 1
//}
const result = fruits.reduce((acc, item)=>{
    if (acc[item]){
        acc[item] += 1;
    } else {
        acc[item] = 1
    }
return acc
},{});
console.log(result)