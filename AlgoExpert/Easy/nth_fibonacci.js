const getNthFibonacci = (n) => {
  let lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  if (n === 1) return lastTwo[0];
  else return lastTwo[1];
};

console.log(getNthFibonacci(5))
