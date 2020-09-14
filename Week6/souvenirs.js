const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", () => {
  
  rl.on("line", (line) => {
    let numbers = line.toString().split(" ").map(Number);

    // console.log(numbers);
    console.log(sumSouvenirs(numbers));
    rl.close();
  });
});

function sumSouvenirs(a) {
    console.log(a, "input");
    if(a.length < 3){
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum+= a[i];
    }
    if(sum%3 !== 0){
        return 0;
    }
    console.log(sum, "sum");
    console.log(sum/3, "sum in 3");
    let arr = [];
    arr[0] = [];
    for(let i = 0; i <= a.length; i++){
        arr[0][i] = true;
    }
    for(let i = 1; i <= sum/3; i++){
        arr[i] = [];
        arr[i][0] = false;
    }
    for(let i = 1; i <= sum/3; i++){
        for(let j = 1; j <= a.length; j++){
            arr[i][j] = arr[i][j-1];
            if(i >= a[j-1]){
                arr[i][j] = arr[i-a[j-1]][j-1];
            }
        }
    }
    console.log(a.length);
    console.log(arr);
    if(arr[sum/3][a.length]){
        return 1;
    } else {
        return 0;
    }
}