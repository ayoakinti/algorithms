const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = Number(line);

  rl.once("line", (line) => {
    const m = Number(line);
    let count = 0;
    let actions = [];
    rl.on("line", (line) => {
      const action = line.toString().split(" ");
      actions.push(action);

      count++;

      if (count == m) {
        // console.log(chainHashing(actions, n));
        let result = chainHashing(actions, n);
        if (result.length) {
          for (let i = 0; i < result.length; i++) {
            //   console.log(typeof result[i])
            // let res = "";
            // let res = result[1][i][0] + " " + result[1][i][1]
            // console.log(res);
            if (typeof result[i] == "string") {
              console.log(result[i]);
              // console.log("strig!!")
            } else {
              let res = "";
              for (let j = 0; j < result[i].length; j++) {
                res += result[i][j] + " ";
              }
              console.log(res);
            }
          }
        }

        rl.close();
      }
    });
  });
});