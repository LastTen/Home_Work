//3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home
/*
function getMultiplesNumbers(from, to, k) {
  // const from = +prompt('Enter from: ', 1);
  // const to = +prompt('Enter to: ', 20);
  // const k = +prompt('Enter to: ', 10);
  const result = [];

  for(let i = from; i <= to; i++){
    if (i%k === 0){
      result.push(i);
    }
  }
  return result
}

console.log( getMultiplesNumbers(10, 20, 5) ); // [10, 15, 20]



function getPeople(handshake) {
  let i = 0
  let count = 1
  while (i < handshake) {
    i += count
    count ++
  }
  
  console.log(count -1);
}

getPeople(1); // 1
getPeople(3); // 2
getPeople(6); // 3
getPeople(10); // 4
getPeople(15); // 5
getPeople(120); // ?


//----Об`єкти------//
const user = {}
user.name ="Alexander"
user.group = "fe2209"
user.name = "Ilya"
delete user.name
user.name = "Victor"


const user2 = {}
for (let key in user) {
  user2[key] = user[key]
}
user2.age = 355
user2.name = "john"

console.log(user, user2);

//Функція для підрахунку кількості ключів

let countFunk = function(userCount){
  let count = 0;
  for (let key in userCount) {
    count ++
  }
  return count
}
console.log(countFunk(user2));




// //взаємодія з функціями


// let calk = function(a, b){
//   return a+b
// }

// let res = function(a, b){
//   return a*b
// }

// console.log(res(calk(2, 2), calk(3, 3)));

*/

/*
// дата  //

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

  return `Then ${m[birthday.getMonth()]} ${d[birthday.getDate()%10]}`
}
console.log(getVillainName(new Date("May 3")));
*/

/*
//---Функція шукає відсутні оюєкти від 0 до 9 і повертає в обєднаном масиві----//
function getMissingElement(superImportantArray){
  let num = [0,1,2,3,4,5,6,7,8,9];
  let res = []
    for (let i = 0; i < num.length; i++){
      if (!superImportantArray.includes(i)){
        res.push(i)
      }
    }
    return superImportantArray.concat(res)
}

console.log(getMissingElement( [0,4]));
*/
/*

//присвоїти null кожному з запитань//
var questions = [{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0
}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
  corAnswer: 0
}];

for (let i = 0; i < questions.length; i++){
  questions[i].usersAnswer = null
}
console.log(questions[0].usersAnswer === null);
*/

/*
//перевернути кожне слово в строчкі і зєднати з пробілами після окрім останнього))//
function reverseWords(str) {
  reword = str.split(" ")
  res = ""
  for(let i = 0; i < reword.length; i++){
    for(let j = reword[i].length -1; j >= 0; j--){
      res = res + reword[i][j];
    }
    if(i !== reword.length -1){
      res += " "
    }
  }
  return res
}

console.log(reverseWords("hello world"));
*/