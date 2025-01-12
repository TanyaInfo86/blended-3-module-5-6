// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  return function (str) {
    return password === str;
  };
}
const userPassword = savePassword(12345);
console.log(userPassword(135));
console.log(userPassword(12345))