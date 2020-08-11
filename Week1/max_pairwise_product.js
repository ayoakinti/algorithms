const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var n;
var arr;

rl.once("line", (number) => {
  n = parseFloat(number);
  rl.on("line", maxProductFast);
});

function maxProduct(numbers) {
  arr = numbers.toString().split(" ");

  product = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] > product) {
        product = arr[i] * arr[j];
      }
    }
  }

  console.log(product);
  rl.close();
}

function maxProductFast(numbers) {
  arr = numbers.toString().split(" ");

  const maxNumber1 = Math.max(...arr.map((number) => parseInt(number)));
  const index = arr.indexOf(maxNumber1);
  arr.splice(index, 1);
  const maxNumber2 = Math.max(
    ...arr
      .map((number) => parseInt(number))
  );
  // console.log(maxNumber1);
  // console.log(maxNumber2);
  const maxProduct = maxNumber1 * maxNumber2;
  console.log(maxProduct);

  rl.close();
}
