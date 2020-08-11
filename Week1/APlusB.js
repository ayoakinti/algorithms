const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", readLine);

function readLine(numbers) {
  if(numbers !== "\n"){
    var a = parseInt(numbers.toString().split(" ")[0], 10);
    var b = parseInt(numbers.toString().split(" ")[1], 10);
    console.log(a + b);
    rl.close();
  }
}