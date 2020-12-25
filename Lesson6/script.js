/*function even_or_odd(number) {
  if (number % 2 === 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}
even_or_odd(56)



function makeNegative(num) {
  if (num <= 0){
    return num
  }
  else{
    return -num
  }
}
makeNegative(-25)

function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!"
  }
  else{
    return "Hello, " + name + "!";
  }
}
greet("Joni")



function boolToWord( bool ){
  if (bool){
    return "Yes"
  }
  return "No"
}


function rentalCarCost(d) {
  if (d > 0 && d < 3) {
    return d * 40;
  } else if (d >= 3 && d < 7) {
    return d * 40 - 20;
  } else if (d >= 7) {
    return d * 40 - 50;
  }
}
*/

function isValidWalk(walk) {
  let North = 0
  let East = 0
  let South = 0
  let West = 0

  for (let i = 0; i < walk.length; i++){
    if (walk[i] === "n"){
      North += 1
    }
    if (walk[i] === "e"){
      East += 1
    }
    if (walk[i] === "s"){
      South += 1
    }
    if (walk[i] === "w"){
      West += 1
    }
  }
  if((North + East + South + West) === 10){
    if(North === 5 || East === 5 || South === 5 || West === 5){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])