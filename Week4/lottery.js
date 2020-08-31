const readline = require("readline");
const { count } = require("console");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const ns = line.toString().split(" ").map(Number)[0];
  const s = [];
  let count = 0;
  rl.on("line", (digits) => {
    const arr = digits.toString().split(" ").map(Number);
    s.push(arr);
    count++;
    if (count == ns) {
      // rl.close();
      // console.log(s,s.length, "s");
      rl.on("line", (line) => {
        const p = line.toString().split(" ").map(Number);
        // console.log(p, "p");

        console.log(...lottery(s, p));
        rl.close();
      });
    }
  });
});

function lottery(s, p) {
  counts = [];
  // console.log(s, "s")
  for (let i = 0; i < p.length; i++) {
    let count = 0;
    // console.log(i, "i");
    for (let j = 0; j < s.length - 1; j++) {
      // console.log(j, "j");
      if (s[j][0] <= p[i] && s[j][1] >= p[i]) {
        // console.log(s[j], "s (j)")
        // console.log(count, "count");
        // count
        count++;
      }
    }
    counts.push(count);
  }
  return counts;
}
