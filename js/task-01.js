// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній
function letMeSeeYourName(callback){
    const userName = prompt("enter uerName");
    if (!userName) {
        return
    }
callback(userName);
}
function greet(name) {
    console.log(`Привіт ${name}`);
}
letMeSeeYourName(greet)
