const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", result);

function result(number) {
    function Fibonacci(n){
        if(n <= 1){
            return n;
        } else {
            return Fibonacci(n-1) + Fibonacci(n-2);
        }
        
    }

    function FibonacciFast(n) {
        let arr = [];
        arr[0] = 0;
        arr[1] = 1;
        for (let i = 2; i <= n; i++) {
            arr[i] = arr[i-1] + arr[i-2];
        }
        return arr[n];
      }
    
    // console.log(Fibonacci(number), "naive");
    console.log(FibonacciFast(number));
    rl.close();
}