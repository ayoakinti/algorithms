const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", result);

function result(number) {

    function FibonacciLastDigit(n) {
        let arr = [];
        arr[0] = 0;
        arr[1] = 1;
        for (let i = 2; i <= n; i++) {
            arr[i] = (arr[i-1] + arr[i-2])%10;
        }
        return arr[n];
      }
    
    console.log(FibonacciLastDigit(number));
    rl.close();

}