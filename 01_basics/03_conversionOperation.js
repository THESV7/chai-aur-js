let score = "null"

// console.log(typeof score);
// console.log(typeof (score));

// NUMBER CONVERSION
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null, undefined => NaN

// BOOLEAN CONVERSION
let isLoggedIn = "undefined"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//  "" => false
// "smit" => true

// STRING CONVERSION
let someNumber = 22

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************** OPERATIONS ********************

let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(3%2);

let str1 = "Hello"
let str2 = " Smit"
let str3 = str1 + str2
console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2; // Should avoid using such tricks

let a = 100
let b = a++;
console.log(`a:${a}, b:${b}`);

let x = 100
let y = ++x;
console.log(`x:${x}, y:${y}`);

// link to study 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



