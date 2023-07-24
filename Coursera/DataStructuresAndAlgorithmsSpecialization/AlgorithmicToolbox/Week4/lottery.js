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
    if (count == ns + 1) {
      let p = s[s.length - 1];
      s.splice(s.length - 1, 1);

      let result = lottery(s, p);
      let res = "";
      for (let i = 0; i < result.length; i++) {
        res += result[i] + " ";
      }
      console.log(res);
      rl.close();
    }
  });
});

function lottery(s, p) {
  // console.log(s, p, "inputs");
  counts = [];

  for (let i = 0; i < p.length; i++) {
    let count = 0;
    // console.log(i, "i");
    for (let j = 0; j < s.length; j++) {
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

// function quicksort(s, p){
  
// }