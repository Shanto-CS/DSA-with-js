// ------------------#---------------
// if else
// ------------------#---------------
let age = Number(prompt("Enter your age_"));
if (isNaN(age) === true || age < 0) {
  console.log("invalid input");
} else {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("you are behind " + (18 - age) + " years to vote");
  }
}
// ------------------#---------------
// electricity bill calculation_
// suppose your electicity bill unit cost for fist 100 units is 4.5 taka, then next 101 to 200 units price is 6.5 taka then next 201 to 300 units price is 8.5 taka and 301 to 400 unit price is 10.5 taka and above 400 units price is 12 taka. now suppos your toal unit is x unit. now calculate the tatal bill amount.
// ------------------#---------------
let unit = Number(prompt("Enter your total unit_"));
let totalBill = 0;
if (isNaN(unit) === true || unit < 0) {
  console.log("invalid input");
} else {
  if (unit > 400) {
    totalBill = Math.floor((unit - 400) * 12);
    unit = 400;
  }
  if (unit > 300) {
    totalBill += Math.floor((unit - 300) * 10.5);
    unit = 300;
  }
  if(unit > 200){
    totalBill += Math.floor((unit - 200) * 8.5);
    unit = 200;
  }
  if (unit > 100) {
    totalBill += Math.floor((unit - 100) * 6.5);
    unit = 100;
  }
  if( unit > 0) {
    totalBill += Math.floor(unit * 4.5);
  }

  console.log("Your total bill is " + totalBill + " taka");
}

// ------------------#---------------
// ------------------#---------------
