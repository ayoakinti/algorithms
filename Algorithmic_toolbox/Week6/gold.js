const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const W = line.toString().split(" ").map(Number)[0];

  rl.on("line", (line) => {
    let w = line.toString().split(" ").map(Number);

    // console.log(W, w);
    console.log(maxGold(W, w));
    // console.log(sort(w));
    rl.close();
  });
});

// function sort(array) {
//   // console.log(array);
//   for (let i = 0; i < array.length; i++) {
//     // console.log(i, "i");
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] <= array[j]) {
//         continue;
//       } else {
//         // console.log(j, "j");
//         let clone = array[j];
//         array[j] = array[i];
//         array[i] = clone;
//       }
//     }
//   }
//   return array;
// }

function maxGold(a, b){
  // console.log(a, b, "inputs");
  let arr = [];
  arr[0] = [];
  for(let i = 0; i <= b.length; i++){
    arr[i] = [];
    arr[i][0] = 0;
  }
  for(let i = 0; i <= a; i++){
    arr[0][i] = 0;
  }
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a; j++){
      arr[i][j] = 0;
      // If weight j is not included
      let num1 = arr[i-1][j];
      if(num1 > arr[i][j]){
        arr[i][j] = num1;
      }
      if(j - b[i-1] >= 0){
        let num2 = arr[i-1][j-b[i-1]] + b[i-1];
        if(num2 > arr[i][j]){
          arr[i][j] = num2;
        }
      }
    }
  }
  return arr[b.length][a];
}

