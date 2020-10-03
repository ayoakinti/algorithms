const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    const number = Number(line);

    let result = maxprize(number);
    
    console.log(result[0]);
    // console.log(result[1][result[1].length-1]);
    // console.log(result[1].join(" "));
    // console.log(...maxprize(number)[1]);
    // console.log(...result[1]);
    let num = "";
    for(let i = 0; i < result[1].length; i++){
        num += result[1][i] + " ";
    }
    console.log(num);
    rl.close();

    // const res = result[1].join(" ");
    // // console.log(res);
    // // let l = 5000;
    // // console.log(res);
    // // console.log(res.length);
    // // console.log(typeof res);
    // // console.log(res.slice(1, 9));
    // const maxLength = 50000;

    // for (let i = 0; i < res.length; i += maxLength) {
    //   process.stdout.write(res.slice(i, i + maxLength));
    // }

    // process.stdout.write("\n");
    // process.exit();
});

function maxprize(a) {
    // console.log(a, "input");
    let arr = [];
    let sum = [];
    arr[0] = sum[0] = 0;
    for(let i = 0; i < a; i++){
        // console.log(i, "i");
        let sum1 = i+1+sum[i];
        let rem1 = a-sum1;
        // console.log(sum1, rem1, "sum and rem");
        if(rem1 == 0){
            // console.log("rem is 0");
            arr[i+1] = i+1;
            sum[i+1] = sum1;
            break;
        } 
        if(rem1 > i+1){
            arr[i+1] = i+1;
            sum[i+1] = sum1;
        } else {
            arr[i+1] = i+1+rem1;
            sum[i+1] = sum1+rem1;
            break;
        }
    }
    return [arr.length-1,arr.slice(1)]
}