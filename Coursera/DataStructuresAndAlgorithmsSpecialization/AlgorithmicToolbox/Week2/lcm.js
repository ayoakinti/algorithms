const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", result);

function result(number) {
    let arr = number.toString().split(" ").map(Number);

    function GCD(a,b) {
        if (b == 0){
            return a;
        } else {
            return GCD(b, a%b);
        }
      }
    
    console.log((arr[0] * arr[1])/GCD(arr[0],arr[1]));
    rl.close();
    
}