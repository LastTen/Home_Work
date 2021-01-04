'use strict'
/*
//Пернтворення масиву в строку і назад в масив/// метод .join and .split
const arrOFNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
console.log(arrOFNumbers);

let strOfNumber = arrOFNumbers.join(" ")
console.log(strOfNumber);

let splitArrNumbers = strOfNumber.split(" ")
console.log(splitArrNumbers);
*/

/*
// Метод .map проходить по кожному елементу і замінює його на ретьорн функції
const arrOfNumbers1 = [1,2,3,4,5,6,7,8,9,10,]
console.log(arrOfNumbers1);
//          //якщо елементів (значень функції) більше 1 то потрібні дужки
const numbersMap = arrOfNumbers1.map((num, index) => (num + index) * 2) //елементи функції 1 значення, 2 індекс, 3 сам масив//
console.log(numbersMap);
*/

/*
// Метод .filter  шукає в масиві елементи які True, і повертає тільки їх//
const numNotFilter = [2,4,6,8,10,3,9,]
console.log(numNotFilter);

const numFilter = numNotFilter.filter((num, ind) => {
  return num % 2 === 0 || ind === 5
}) /// також приймає 3 значення
console.log(numFilter);
*/

/*
// Метод .concat обєднує масиви в один спільний
const numFirst = [1,2,3,4];
const numSecond = [5,6,7];
const numThert = [8,9,10];

const numFirstAndSecond = numFirst.concat(numSecond, numThert);// приймає безліч обє'ктів
console.log(numFirstAndSecond);
*/

/*
// Метод .find поветає першу умову що підходить//
const numForFind = [1,2,3,4,5,6];
const find4 = numForFind.find(num => num === 4); // повертає лише перший елемент
console.log(find4);
*/

/*
// Метод .findIndex поветає index елемента  що підходить//
const numForFindIndex = [1,2,3,4,5,6];
const find4 = numForFindIndex.findIndex(num => num === 4); // повертає лише один індекс
console.log(find4);
*/

/*
// Метод .every повертає true якщо всі вірні and false якщо хоч один ні
const numForEvery = [1,2,3,4,5,6,7]
const everySm8 = numForEvery.every(num => num < 8) //тільки булійовий тип 
console.log(everySm8);
*/

/*
// Метод .some повертає true якщо хоч одна умова істина
const numForSome = [1,2,3,4,5,6,7]
const someBig8 = numForSome.some(num => num > 8) //тільки булійовий тип 
console.log(everySm8);
*/

/*
// Метод .reducer акумулює значення масиву)) плюсує одне до іншого//
const numForReduce = [1,3,6,15,30];
const numReduce = numForReduce.reduce(function(accumulator, currentValue, index){
  console.log(accumulator);
  return accumulator + currentValue
}, 10) // cтартове значення вказується після закриття функції
console.log(numReduce);
*/