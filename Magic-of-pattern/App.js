let prompt = require("prompt-sync")();
let a = prompt("Enter a number ");

// --------------------#-------------------
//triangle pattern
// --------------------#-------------------
// --------------------#-------------------
for (let i = 1; i <= a; i++) {
  // console.log(a)
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

// --------------------#-------------------
//pattern squire
// --------------------#-------------------
for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= a; j++) {
    process.stdout.write(" * ");
  }
  process.stdout.write(" \n");
}
// --------------------#-------------------
//1 2 3 pattern
// --------------------#-------------------

let n = Number(a);
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String(j) + " ");
  }
  process.stdout.write("\n");
}

// --------------------#-------------------
// character pattern A B C . .  .
// --------------------#-------------------

for (let i = 1; i <= n; i++) {
    let ascii = 65;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii) + " ");
        ascii++;
    }
    process.stdout.write("\n");
}

// --------------------#-------------------
//inverted rightengle triangel
// way 1:
// --------------------#-------------------
 for (let i = a; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
// --------------------#-------------------
//way 2:
// --------------------#-------------------
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= a - i + 1; j++) {
    process.stdout.write("# ");
  }
  console.log();
}
// --------------------#-------------------
// way 3:
// --------------------#-------------------

for(let i = 1; i<=n; i++){
  for(let j = n ; j>=i; j--){
    process.stdout.write("@ ")
  }
  process.stdout.write('\n')
}
// --------------------#-------------------
//mirror left triangle
// --------------------#-------------------
for(let i =1; i<=n;i++){
  for(let j = 1; j<=n; j++){
    if(n-i>=j){
      process.stdout.write("  ")
    }else{
      process.stdout.write(" *")
    }
  }
  console.log()
}
// --------------------#-------------------
// pattern of X
// --------------------#-------------------

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i+j == n+1 || i == j) {
      process.stdout.write("* ");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}

// --------------------#-------------------
//v pattern
// --------------------#-------------------
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= (2*n)-1; j++) {
    if (i+j == (n*2) || i == j) {
      process.stdout.write("* ");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}