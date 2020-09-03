const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const money = Number(line);
  // console.log(money);
  let denominations = [1, 3, 4];
  console.log(change(money, denominations));
  rl.close();
});

function change(a, b) {
  let minCoins = [];
  minCoins[0] = 0;
  if (a == 0) {
    return minCoins[0];
  }
  for (let i = 1; i <= a; i++) {
    minCoins[i] = Number.POSITIVE_INFINITY;
    for (let j = 0; j < b.length; j++) {
      if (i >= b[j]) {
        let numCoins = minCoins[i - b[j]] + 1;
        if (numCoins < minCoins[i]) {
          minCoins[i] = numCoins;
        }
      }
    }
  }
  return minCoins[a];
}
