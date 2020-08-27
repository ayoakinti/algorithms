const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");

rl.on("line", (d) => {
  let distance = Number(d);

  rl.on("line", (m) => {
    const maxdistance = Number(m);
    rl.on("line", (n) => {
      let number = Number(n);
      rl.on("line", (line) => {
        const stations = line.toString().split(" ").map(Number);
        console.log(refills(distance, maxdistance, number, stations));
        process.exit();
      });
    });
  });
});

function updateFill(fills, maxdistance, stops) {
  n = stops.length;
  for (let i = 0; i < n; i++) {
    // console.log(i, "i");
    for (let j = i + 1; j < n; j++) {
    //   console.log(j, "j");
    //   console.log(stops[i], stops[j], "stop i and j");
      if (stops[j] - stops[i] <= maxdistance) {
        // console.log(j, n - 1, "j and (n-1)");
        if (j == n - 1) {
          return fills;
        } else {
          continue;
        }
      } else {
        fills++;
        if (j-1 == 0) {
          return -1;
        } else {
          stops.splice(0, j-1);
        //   console.log(stops, fills, maxdistance, "after spliced");
          return updateFill(fills, maxdistance, stops);
        }
      }
    }
  }
  // return fills;
}

function refills(d, m, n, stop) {
  // console.log(d, "d");
  // console.log(m, "m");
  // console.log(n, "n");
  // console.log(stop, "stop");
  let fills = 0;
  stop.unshift(0);
  stop.push(d);
//   console.log(stop, "stop");
  return updateFill(fills, m, stop);
}
