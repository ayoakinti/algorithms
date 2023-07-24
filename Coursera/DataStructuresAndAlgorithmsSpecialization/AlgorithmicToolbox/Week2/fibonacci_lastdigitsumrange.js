const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", result);

function result(number) {
  let numbers = number.toString().split(" ").map(Number);

  function Period(n) {
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
    return [period, arr, lastdigitsum];
  }

  function FibonacciLastSumRange(m, n) {
    let arr = [];
    let arr2 = [];
    let lastdigitsum = [];
    let lastdigitsum2 = [];
    arr[0] = lastdigitsum[0] = 0;
    arr[1] = lastdigitsum[1] = 1;
    let period = Period(n);
    let sum;
    // console.log(period);
    if (period[0]) {
      let reoccurence = Math.floor((n - m) / period[0]);
      let reoccuringsum = period[2][period[0] - 1];
      sum = reoccuringsum * reoccurence;
      //   console.log(sum);
      //   console.log(occurence);
      m = m % period[0];
      n = n % period[0];
    }
    // console.log(m, n, "m, n");

    if (n >= m) {
      if (n >= 2) {
        if (m < 1) {
          m = 1;
          for (let i = 2; i <= m; i++) {
            arr[i] = lastdigitsum[i] = (arr[i - 1] + arr[i - 2]) % 10;
          }
          for (let i = m + 1; i <= n; i++) {
            arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
            lastdigitsum[i] = (lastdigitsum[i - 1] + arr[i]) % 10;
          }
        } else {
          for (let i = 2; i <= m; i++) {
            arr[i] = lastdigitsum[i] = (arr[i - 1] + arr[i - 2]) % 10;
          }
          for (let i = m + 1; i <= n; i++) {
            arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
            lastdigitsum[i] = (lastdigitsum[i - 1] + arr[i]) % 10;
          }
        }
        // console.log(arr);
      }
      if (sum) {
        console.log(sum, "sum");
        return sum + lastdigitsum[n];
      } else {
        return lastdigitsum[n];
      }
    } else {
      if (m >= 2) {
        for (let i = 2; i <= n; i++) {
          arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
          lastdigitsum[i] = (lastdigitsum[i - 1] + arr[i]) % 10;
          //   console.log(arr, i);
        }
        // console.log(arr, "arr");
        // console.log(m, "m");
        for (let i = m + 1; i <= period[0]; i++) {
          if (i == m + 1) {
            arr2 = period[1];
            lastdigitsum2 = period[2];
            lastdigitsum2[i] = (arr2[i - 1] + arr2[i]) % 10;
          } else {
            lastdigitsum2[i] = (lastdigitsum2[i - 1] + arr2[i]) % 10;
          }
        }
        // console.log(arr2, "arr2");
        // console.log(lastdigitsum2[period[0]], lastdigitsum2[period[0] - 1],arr2[period[0]],  "lastdigitsum2");
        if (sum) {
          return sum + ((lastdigitsum2[period[0]] + lastdigitsum[n]) % 10);
        } else {
          return (lastdigitsum2[period[0]] + lastdigitsum[n]) % 10;
        }
      }
    }
  }

  console.log(FibonacciLastSumRange(numbers[0], numbers[1]));
  //   console.log(Period(numbers[1]));
  rl.close();
}
