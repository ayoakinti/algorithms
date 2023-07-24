const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const str = line;

  rl.once("line", (line) => {

    const n = Number(line);
    let count = 0;
    let vertices = [];
    rl.on("line", (line) => {
      const vertix = line.toString().split(" ").map(Number);
      vertices.push(vertix);

      count++;

      if (count == n) {
        console.log(rope(str, vertices));

        rl.close();
      }
    });
  });
});

function rope(str, arr) {
    console.log(str, arr, "input");
}
