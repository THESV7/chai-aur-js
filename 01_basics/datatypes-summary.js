// Primitive

// 7 types - String, Number, Boolean, Null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id, anotherId);
// console.log(id === anotherId);

const bigNumber = 62735372n
// console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "Smit",
    age: "21"
}

console.log(typeof bigNumber); // You can check type of all datatypes here


// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myName = "Smit"
let anotherName = myName
anotherName = "Amit"
console.log(myName);
console.log(anotherName);


let userOne = {
    email: "abc@google.com",
    upi: "user@axis"
}
let userTwo = userOne
userTwo.email = "smit@google.com"
console.log(userOne.email);
console.log(userTwo.email);

