// for (var i = 1; i <= 1000; i++) {
//   console.log("hello world");
// }
// --------------------#---------------------
// sum of first n natural numbers
// factorial of n!
// --------------------#---------------------
let input = prompt("Enter a number:");

// if (input === null) { // can be used (!input) which also catches the empty strings
//   console.log("Canceled");
// } else {
//   let num = Number(input);

//   if (isNaN(num) === true) {
//     // (num != num) if it is NaN then return true
//     console.log("Invalid! \n Please enter valid number");
//   } else {
//     if (num < 0) {
//       console.log("Please Enter the +ve number");
//     } else {
//       // sum of num from 1
//       let sum = 0;
//       for (let i = 1; i <= num; i++) {
//         sum += i;
//       }
//       //factorial calculation
//       let fact = 1;
//       for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//       }
//       console.log(`Total of ${num} is ${sum}`);
//       console.log(`Factorial of ${num} is ${fact}`);
//     }
//   }
// }

// --------------------#---------------------
//factors of n
// --------------------#---------------------
if (input === null) {
  console.log("canceled");
} else if (input === "") {
  console.log("No input");
} else {
  let num = Number(input);
  if (isNaN(num)) {
    console.log("Not a number; Enater a number");
  } else {
    if (num <= 0) {
      console.log("Enter +ve number");
    } else {
      // for (let i = 1; i <= Math.floor(num / 2); i++) {
      //   if (num % i === 0) {
      //     let factores = i;
      //     console.log(factores);
      //   }
      // }
      console.log(num);

      // is prime
      // let issPrime = true;
      //   for (let i = 2; i <= Math.floor(num / 2); i++) {
      //     if (num % i === 0) {
      //       issPrime = false;
      //       break;
      //     }
      //   }
      //   console.log(issPrime ? "Prime" : "Not Prime");
      // console.log(isPrime(num));
    }
  }
}

// --------------------#---------------------
//prime number by function and loopin by 1/4 times
// --------------------#---------------------

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i + 2) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
// --------------------#---------------------
//strong Number_ if a number all digits factorial and their sum is equal to itself then it is called as a strong number.
// --------------------#---------------------
if (input === null) {
  console.log("canceled");
} else if (input === "") {
  console.log("No input");
} else {
  let num = Number(input);
  if (isNaN(num)) {
    console.log("Not a number; Enater a number");
  } else {
    if (num <= 0) {
      console.log("Enter +ve number");
    } else {
      let numInp = num;
      if (num > 0) {
        let factsum = 0;
        while (num > 0) {
          var rem = num % 10;
          let fact = 1;
          for (let i = 1; i <= rem; i++) {
            fact = fact * i;
          }
          factsum += fact;
          num = Math.floor(num / 10);
        }
        console.log(factsum);
        console.log(
          factsum === numInp ? "Strong number" : "not a strong number"
        );
      }
    }
  }
}
// --------------------#---------------------
// --------------------#---------------------
// --------------------#---------------------
// --------------------#---------------------
// --------------------#---------------------
