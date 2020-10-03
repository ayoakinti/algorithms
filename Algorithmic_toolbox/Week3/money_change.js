const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", result);

function result(number){

    function minimumCoins(n){
        const coins = [10, 5, 1];
        // console.log(n, "n")
        let minimumcoins = 0;
        for (let i = 0; i < coins.length; i++){
            if(n%coins[i] == 0){
                // console.log("no remainder");
                // console.log(coins[i], n/coins[i], "division");
                minimumcoins += Math.floor(n/coins[i]);
                break;
            } else {
                // console.log("remainder");
                // console.log(coins[i], n/coins[i], "division");
                // console.log(Math.floor(n/coins[i]), "floor");
                minimumcoins += Math.floor(n/coins[i]);
                n = n%coins[i];
            }
            // console.log(minimumcoins, i, "min coins");
        }
        return minimumcoins;
    }

    console.log(minimumCoins(parseInt(number)));
    rl.close();
}