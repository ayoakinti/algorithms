const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (numbers) => {
  const store = numbers.toString().split(" ").slice(1).map(Number);

  rl.on("line", (digits) => {
    const input = digits.toString().split(" ").slice(1).map(Number);
    let output = [];
    // let c = 0;
    let final = store.length;
    let initial = 0;

    for (let i = 0; i < input.length; i++) {
      output.push(search(store, input[i], initial, final));
    //   output.push(search(store, input[i], c));
    //   console.log(i, output[i], "output");
    }
    // console.log(...output);
    // rl.close();
    const res = output.join(" ");
    const maxLength = 50000;

    for (let i = 0; i < res.length; i += maxLength) {
      process.stdout.write(res.slice(i, i + maxLength));
    }

    process.stdout.write("\n");
    process.exit();
  });
});

function search(arr, b, l, r) {
    // function search(arr, b, c) {
    // console.log(arr, b, l, r, "inputs");
    // console.log(arr, "store");
    // console.log(b, "input");
    // console.log(l, "initial");
    // console.log(r, "final");

//   if (arr.length >= 1) {
//     let m = Math.ceil(arr.length / 2);
//     if (b < arr[0] || b > arr[arr.length - 1]) {
//       // console.log("out of range");
//       return -1;
//     } else {
//       //   console.log(m, "m");
//       if (b == arr[m - 1]) {
//         //   console.log("equal");
//         //   console.log(m+c, "m+c");
//         return m + c - 1;
//       } else if (b < arr[m - 1]) {
//         return search(arr.slice(0, m - 1), b, c);
//       } else {
//         //   console.log("greater");
//         c += m;
//         return search(arr.slice(m), b, c);
//       }
//     }
//   }

    while(l <= r){
        let m = Math.ceil(l + (r-l)/2);
        // console.log(m, "center");
        // console.log(arr[l], arr[r-1], "final and initial");
        if(arr[l] > b || arr[r-1] < b){
            return -1;
        } else
        if(arr[m-1] == b){
            // console.log("equal");
            return m-1;
        } else if (b < arr[m-1]){
            // console.log(m-1, "lesser");
            r = m-1;
        } else {
            
            // console.log(m, "greater");
            l = m;
            // return -4;
        }
    }
}
