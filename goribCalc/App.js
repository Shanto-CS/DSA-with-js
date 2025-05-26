// Here have to create a Sastha/ gorib calculator that have some easy functionality. Where There are 2 varibale stored in x and y which need to be calculated based on user input oprerator. Like a propmt will be asked for oparetor from user. if user type +,-,* or / for adding, subtraction, multipliacation or divition.

const x = 30;
const y = 20;
let oprerator = -1;
let exit = 0;

while (oprerator !== exit) {
  oprerator = prompt("Enter an operator (+, -, *, ,/) or 0 to exit: ");
  if (oprerator === 0) {
    console.log("exit");
    break;
  }

  if (oprerator === "+") {
    console.log("Addition of x and y are: " + (x + y));
  } else if (oprerator === "-") {
    console.log("Subtraction of x and y are: " + (x - y));
  } else if (oprerator === "*") {
    console.log("Multiplication of x and y are: " + x * y);
  } else if (oprerator === "/") {
    console.log("Divition of x and y are: " + x / y);
  } else {
    console.log("Invalid input");
  }
  let next = prompt("Do you want to continue: 1 for Yes, 2 for No");
  if (next === "1") {
    continue;
  } else if (next === "2") {
    console.log("Thanks for using sastha calculator!");
    break;
  } else {
    console.log("Invalid input 1/0");
    oprerator = 0;
  }
}
