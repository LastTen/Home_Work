'use strict'
/*
function sumNew(a, b){
  console.log(this, arguments);
  return a + b
}


function multNew(a, b){
  console.log(this, arguments);
  return a * b
}

console.log(sumNew(2, 9));

const a = {
  name: "a",
  b: {
    name: 'b',
    sumNew,
    multNew
  },
  sumNew,
  multNew
}
a.sumNew(5, 8);
a.b.multNew(5, 7)


sumNew.call(a, 6, 8)
multNew.apply(a.b,[5, 8])
*/
/*
function hello(){
  return(this.name);
}

const person = {
  name: "John",
  age: "32",
  sayHello: hello,
  logInfo: function(){
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
  }
}
//console.log(person.sayHello());

const person2 = {
  name: 'Julia',
  age: 20,
  logInfo: person.logInfo
}
*/