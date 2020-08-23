const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var arr;

rl.once("line", () => {
  rl.on("line", maxProductFast);
});

function maxProductFast(numbers) {
  arr = numbers.toString().split(" ").map(Number);

  let MaxNumber = 0;
  let NextMaxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > MaxNumber) {
      NextMaxNumber = MaxNumber;
      MaxNumber = arr[i];
    } else if (arr[i] > NextMaxNumber) {
      NextMaxNumber = arr[i];
    } else {
      continue;
    }
  }

  console.log(MaxNumber * NextMaxNumber);

  rl.close();
}
