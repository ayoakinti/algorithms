const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", result);

function result(number) {
  function FibonacciLastSum(n) {
    let arr = [];
    let lastdigitsum = [];
    arr[0] = lastdigitsum[0] = 0;
    arr[1] = lastdigitsum[1] = 1;
    for (let i = 2; i <= n; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
      lastdigitsum[i] = (lastdigitsum[i - 1] + arr[i]) % 10;
    }
    return lastdigitsum[n];
  }

  function FibonacciLastSum2(n) {
    let arr = [];
    let lastdigitsum = [];
    let period;
    arr[0] = lastdigitsum[0] = 0;
    arr[1] = lastdigitsum[1] = 1;
    for (let i = 2; i <= n; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
      lastdigitsum[i] = (lastdigitsum[i - 1] + arr[i]) % 10;
      if (arr[i] % 10 == 1 && arr[i - 1] % 10 == 0) {
        period = i - 1;
        break;
      }
    }
    if (period) {
      let reoccuringsum = lastdigitsum[period-1];
      let reoccurrence = Math.floor(n/period);
      let sum = reoccuringsum * reoccurrence + lastdigitsum[n%period];
      return sum;
    } else {
        return lastdigitsum[n];
    }
  }

    // console.log(FibonacciLastSum(number));
  console.log(FibonacciLastSum2(number));
  rl.close();
}
