let prompt = require("prompt-sync")();
let arr = new Array(5);
// arr.push(12);
// arr.push("sk");
// arr.push(210,35)
// // arr.pop()

// arr[5] = 5;
// arr[0] = 20;
// arr[1] = 10;
// arr[2] = 10;
// arr[3] = 10;
// let newarr = arr
// console.log(newarr)
// ---------------------#------------------
// input from prompt for 5 values and store it in array
// ---------------------#------------------
let count = 0;
while (count < 5) {
  count++;
  let input = prompt(`Enter ${count} th number: `);

  arr[count - 1] = Number(input);
}
console.log(arr);
// ---------------------#------------------

// ---------------------#------------------
