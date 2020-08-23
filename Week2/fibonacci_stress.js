function Fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}

function FibonacciFast(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

function FibonacciLastDigitFast(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
  }
  return arr[n];
}

while (true) {
  const n = Math.floor(Math.random() * 1000001);
  console.log(n);
  const res2 = FibonacciLastDigitFast(n);
  console.log(res2, "last digit");
//   if (res1 !== res2) {
//     console.log(`Wrong answer: ${res1} - ${res2}`);
//     break;
//   } else {
//     console.log("OK!");
//   }
}
