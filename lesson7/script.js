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
*/


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