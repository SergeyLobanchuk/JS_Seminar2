// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = prompt('Введите число до 1');
// let num2 = 0;
// if (num1 <= 1) {
//     num2 = prompt('Введите число от 3');
// } if (num2 >= 3) {
//     console.log('Условия верны');

// } else console.log('условия не верны');



// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// Решение

// let test = true;
// (test === true) ? console.log('+++') : console.log('---');


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
//Вариант 1

// let day = prompt('введите число месяца', 0);
// if (day > 0 && day <= 10) {
//     console.log('первая декада месяца');
// } else if (day > 10 && day <= 20) {
//     console.log('вторая декада месяца');
// } else if (day > 20 && day <= 31) {
//     console.log('третья декада месяца');
// } else console.log('не соответствует числу месяца');

//Вариант 2

// let day = Math.ceil(Math.random() * 31);
// if (day <= 10) {
//     alert(`${day} - первая декада`);

// } else if (day <= 20) {
//     alert(`${day} - вторая декада`);
// } else
//     alert(`${day} - третья декада`);


//Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.



// let number = prompt('введите число', 0);
// let units = number % 10;
// let tens = Math.trunc((number % 100) / 10);  //Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.
// let hundreds = Math.trunc(number / 100);
// console.log(`В числе ${number} : количество едениц - ${units}, количество десяток- ${tens}, сотен - ${hundreds}`);