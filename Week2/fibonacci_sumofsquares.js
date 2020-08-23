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

  function FibonacciSumSquares(n) {
    let arr = [];
    let period;
    arr[0] = 0;
    arr[1] = 1;
    // n = n+1
    for (let i = 2; i <= n+1; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
      if (arr[i] % 10 == 1 && arr[i - 1] % 10 == 0) {
        period = i - 1;
        break;
      }
    }
    // console.log(arr);
    if (period) {
        // console.log(period)
      return (arr[n%period] * arr[n%period +1])%10;
    } else {
        return (arr[n] * arr[n+1])%10; 
    }
  }

    // console.log(FibonacciLastSum(number));
  console.log(FibonacciSumSquares(parseInt(number)));
  rl.close();
}
