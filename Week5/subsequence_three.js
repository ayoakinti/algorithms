const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", () => {
  rl.on("line", (line) => {
    const number1 = line.toString().split(" ").map(Number);

    rl.on("line", () => {
      rl.on("line", (line) => {
        let number2 = line.toString().split(" ").map(Number);
        rl.on("line", () => {
          rl.on("line", (line) => {
            let number3 = line.toString().split(" ").map(Number);
            console.log(subsequence(number1, number2, number3));
            rl.close();
          });
        });
      });
    });
  });
});

function subsequence(a, b, c) {
  // console.log(a, b, c, "inputs");
  let max = [];
  max[0] = [[0]];
  //   console.log(max[0][0][0]);
  // console.log(a.length, b.length);
  if (a.length == 0 && b.length == 0 && c.length == 0) {
    return max[0][0][0];
  }
  for (let i = 0; i <= a.length; i++) {
    max[i] = [[]];
  }
  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      max[i][j] = [];
    }
  }
  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      for (let k = 0; k <= c.length; k++) {
        // max[0][i] = i;
        if (i == 0 || j == 0 || k == 0) {
          max[i][j][k] = 0;
        }
      }
    }
  }
  // console.log(max, "max after a");
  // console.log(max[1][1][1]);
  // console.log(max[0][0][2]);
  // console.log(max[2][2][0]);
  // console.log(max[2][0][2]);
  // console.log(max[0][2][2]);

  for (let i = 1; i <= a.length; i++) {
    // console.log(a[i-1], "i");
    for (j = 1; j <= b.length; j++) {
        // console.log(b[j-1], "j");

      for (k = 1; k <= c.length; k++) {
        // console.log(c[k-1], "k");

        if ((a[i - 1] == b[j - 1]) && b[j-1] == c[k - 1]) {
          // console.log(a[i-1], b[j-1], c[k-1], "subtractions of equal")
          // console.log(i-1, j-1, "i and j minus 1")
          max[i][j][k] = max[i - 1][j - 1][k - 1] + 1;
          // console.log("equal");

          // console.log(three, "three");
        } else {
          max[i][j][k] = max[i][j][k - 1];

          let three = max[i][j - 1][k];
          if (three > max[i][j][k]) {
            max[i][j][k] = three;
            // console.log("j reduced")
          }
          let four = max[i - 1][j][k];
          if (four > max[i][j][k]) {
            max[i][j][k] = four;
            // console.log("i reduced")
          }
          // console.log(three, "three");
        }
        // console.log(max, "max after k");
      }
        // console.log(max, "max after j");

    }
  }
  // console.log(max);
  return max[a.length][b.length][c.length];
}
