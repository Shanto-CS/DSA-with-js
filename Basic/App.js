// var can be used before it is declared as like (use first then pay) :)
// -----------------------##----------------
a = 12;
console.log(a);
// it can be used to declare variables
b = 12;
console.log(b);
var b; // it can be used to declare variables
console.log(c);
c=12;
var c;
// it is not hoisted that is why it is undefined but not an error
// ----------------------- ##----------------

// let have to be declared first@@@@@@@
// ----------------------- ##----------------
let d = 12;
console.log(d);
// it can be used to declare variables
e = 45;
console.log(d);
let e;
// it is not hoisted that is why it is error

// ----------------------- ##----------------
// data type@@@@@
// ----------------------- ##----------------

let f = 12; // number
let g= "13"; // string
 console.log(typeof(f+g));

// ----------------------- ##----------------
// sum of message@@@@@
// ----------------------- ##----------------
let h = 25;
let k = 35;
console.log("The sum of " + h + " and " + k + " is " + h + k);
// // it will concatenate the string and number
console.log("The sum of " + h + " and " + k + " is " + (h + k));
// it will add the number

// ----------------------- ##----------------

// ----------------------- ##----------------
let a =12
let b = 5

console.log("20" - b); // addition
// ----------------------- ##----------------
// user input@@@@@
// ----------------------- ##----------------
let age = Number(prompt("Enter your age"));
console.log(typeof(age));
// ----------------------- ##----------------
// Type casting@@@@@
// ----------------------- ##----------------
Numner()
String()
Boolean()
parseInt()
// ----------------------- ##----------------
// unary operator@@@@@
// post increment
// ----------------------- ##----------------
let m = 11;
let n = 22;
let i;
i = true;
 i++
console.log(i);

i =  m + n + m++ + n++ + ++m + ++n;

console.log(m,n,i);

console.log(m);
n = m++;
console.log(n);
console.log(m);
n = m++;
console.log(n);
console.log(m);
// ----------------------- ##----------------
// pre increment

console.log(m);
let o = --m
console.log(m);
console.log(o);
// ----------------------- ##----------------

let j = 512

console.log(Math.cbrt(j));
// ----------------------- ##----------------
// ----------------------- ##----------------
