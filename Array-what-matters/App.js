let prompt = require("prompt-sync")();
let arr = new Array(7);
arr.push(12);
arr.push("sk");
arr.push(210,35)
// arr.pop()

arr[0] = -20;
arr[1] = 15;
arr[2] = 20;
arr[3] = 60;
arr[4] = 75;
arr[5] = 165;
arr[6] = 226;

let newarr = arr
console.log(newarr)
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
//find maximum no
// ---------------------#------------------
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  } else {
    max = max;
  }
}
console.log(arr[3]);
console.log(max);

// ---------------------#------------------
// find minimum no
// ---------------------#------------------
let min  = arr[0];
for(let i = 0; i<arr.length;i++){
  if(min<arr[i]){
    min = min
  }else{
    min = arr[i]
  }
}
console.log(min)

console.log(Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]))
// ---------------------#------------------
//second max
// ---------------------#------------------

let smax = arr[0]
for(let i=1; i<arr.length;i++){
  if(max < arr[i]){
    smax = max;
    max = arr[i]
  }else if(smax < arr[i] && max != arr[i]){
    smax = arr[i]
  }
}
console.log(arr)
console.log(max, smax)
// ---------------------#------------------
// reverse the array
// ---------------------#------------------

let revArr = new Array(7) // take extra space like arr.
let j = arr.length - 1;

for(let i = arr.length-1; i>=0;i--){
  revArr[j] = arr[i]
  j++;
}
// ---------------------#------------------
// with out taking extra space mean not unsin revArr.
// ---------------------#------------------
console.log(arr);
let k = 0;
while (k <= j) {
  [arr[k], arr[j]] = [arr[j], arr[k]];
  k++;
  j--;
}

console.log(arr);
// console.log(revArr)
// ---------------------#------------------
//suppose you have some bainary code where 0 and 1 need to be separate into two side
//i mean 0 1 1 0 0 1 1 0 1 0 need to be  0 0 0 0 0 1 1 1 1 1 
// ---------------------#------------------
let bin = [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1,1 ,1, 1,0,0,0,0,1,0,0, 0 ]
let l = 0;
for(let i = 0; i < bin.length; i++){
  if(bin[i] === 0){
    [bin[i],bin[l]] = [bin[l], bin[i]]
    l++
  }
}
console.log(bin)
console.log(l)
// ---------------------#------------------
