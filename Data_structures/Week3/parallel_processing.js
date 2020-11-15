const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [n, m] = line.toString().split(" ").map(Number);

  rl.on("line", (line) => {
    const input = line.toString().split(" ").map(Number);

    console.log(Processes(n, m, input));
    
    rl.close();
  });
});

function Processes(n, m, input) {
  console.log(n, m, input, "inputs");
}