let prompt = require("prompt-sync")();
let a = prompt("Enter a number ");

// --------------------#-------------------
//triangle pattern
// --------------------#-------------------
// --------------------#-------------------
// for (let i = 1; i <= a; i++) {
//   // console.log(a)
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// --------------------#-------------------
//pattern squire
// --------------------#-------------------
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= a; j++) {
//     process.stdout.write(" * ");
//   }
//   process.stdout.write(" \n");
// }
// --------------------#-------------------
//1 2 3 pattern
// --------------------#-------------------

let n = Number(a);
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String(j) + " ");
//   }
//   process.stdout.write("\n");
// }

// --------------------#-------------------
// character pattern A B C . .  .
// --------------------#-------------------

// for (let i = 1; i <= n; i++) {
//     let ascii = 65;
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(ascii) + " ");
//         ascii++;
//     }
//     process.stdout.write("\n");
// }

// --------------------#-------------------
//inverted rightengle triangel
// --------------------#-------------------
 for (let i = a; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}