const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", () => {

  rl.on("line", (digits) => {
    const input = digits.toString().split(" ");

    let result = maxNumber(input);
    let num = "";
    for(let i = 0; i < result.length; i++){
        num += result[i] + "";
    }
    console.log(num);
    // console.log(sort(input[0],input[1]));

    rl.close();
    
  });
});

function maxNumber(arr) {
    // console.log(arr, "input");
    // console.log(arr[0][0]);
    // console.log(Number(arr[0][0]));
    for(let i = 0; i < arr.length-1; i++){
        for(j=i+1; j < arr.length; j++){
            if(sort(arr[i], arr[j])){
                // console.log("true");
                continue;
            } else {
                // console.log("false");
                let clone = arr[i];
                arr[i] = arr[j];
                arr[j] = clone;
            }
        }
    }
    return arr;
}

// function sort(a, b) {
//     // console.log(a, b, "inputs");
//     let n;
//     if(a.length >= b.length){
//         n = a.length;
//     } else {
//         n = b.length;
//     }
//     // console.log(n, "n");
//     for(let i = 0; i < n; i++){
//         // console.log(i, "i");
//         if(Number(a[i]) > Number(b[i])){
//             return true;
//         } else if(Number(a[i]) < Number(b[i])) {
//             return false;
//         }
//         if(!a[i]){
//             // console.log("no digit for a");
//             if(Number(a[0]) > Number(b[i])){
//                 return true;
//             } else if(Number(a[0]) < Number(b[i])) {
//                 return false;
//             } else {
//                 if(Number(a[1]) > Number(b[i])){
//                     return true;
//                 } else if(Number(a[1]) < Number(b[i])) {
//                     return false;
//                 } 
//             }
//         }
//         if(!b[i]){
//             // console.log("no digit for b");
//             if(Number(a[i]) > Number(b[0])){
//                 return true;
//             } else if(Number(a[i]) < Number(b[0])) {
//                 return false;
//             } else {
//                 if(Number(a[i]) > Number(b[1])){
//                     return true;
//                 } else if(Number(a[i]) < Number(b[1])) {
//                     return false;
//                 } 
//             }
//         }
//     }
//     return true;
// }

function sort(a, b) {
    let res1 = a+b;
    let res2 = b+a;
    if(Number(res1) >= Number(res2)){
        return true;
    } else {
        return false;
    }
}