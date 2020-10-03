const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", result);

function result(number) {
  let arr = number.toString().split(" ").map(Number);

  function FibonacciMod(n, m) {
    let arr = [];
    let rem;
    let period;
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
      if (arr[i] % m == 1 && arr[i - 1] % m == 0) {
        period = i - 1;
        break;
      }
    }
    if (period) {
        console.log(period);
      rem = arr[n % period] % m;
    } else {
      rem = arr[n] % m;
    }
    return rem;
  }

  console.log(FibonacciMod(arr[0], arr[1]));
  rl.close();
}
