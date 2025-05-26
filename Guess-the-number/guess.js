let num = Math.floor(Math.random() * 100 + 1);
let count = 0;

let guess = -1;

while (guess !== num) {
  if (count >= 10) {
    console.log("You exicid 5; Sorry better luck next time")
    break;
  }
  guess = Number(prompt("Enter the input b/w 1 - 100"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid input! Try again");
    continue;
  }
  if (guess > num) {
    console.log("Number is too high");
    count++;
  } else if (guess < num) {
    console.log("Number is too low");
    count++;
  } else {
    console.log("Congradulations 🎊 you got it!");
    console.log("The num is: " + num + " attemt: " + count);
  }
}
