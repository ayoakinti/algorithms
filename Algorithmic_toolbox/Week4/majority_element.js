const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", () => {
  rl.on("line", (digits) => {
    const arr = digits.toString().split(" ").map(Number);
    // console.log(arr);
    let length = arr.length;
    let initial = 0;

    if(count(arr, recursive(arr, initial, length), initial, length) > length/2){
        console.log(1);
    } else {
        console.log(0);
    }

    // for (let i = 0; i < input.length; i++) {
    //   output.push(search(store, input[i], c));
    // }
    // console.log(...output);
    rl.close();
  });
});

function recursive(arr, l, r) {
  // console.log(arr, l, r, "input");

  if (l == r - 1) {
    return arr[l];
  } else {
    let m = Math.ceil(l + (r - l) / 2);
    // console.log(m, "m");
    let res1 = recursive(arr, l, m);
    let res2 = recursive(arr, m, r);
    // console.log(res1, "res1");
    // console.log(res2, "res2");
    if (res1 == res2) {
      // console.log("equal recursion");
      //   if(count(arr, res1, l, r) > arr.length/2){
      //     return 1;
      //   } else {
      //       return 0;
      //   }
      return res1;
    } else {
      let count1 = count(arr, res1, l, r);
      let count2 = count(arr, res2, l, r);
      if (count1 > count2) {
        // console.log("a > b");
        return res1;
      } else if (count1 < count2) {
        // console.log("b > a");
        return res2;
      } else {
        // console.log("no recursion");
        return res1;
      }
    }
  }
}

function count(arr, m, l, r) {
  let count = 0;
  for (let i = l; i < r; i++) {
    if (arr[i] == m) {
      count++;
    }
  }
  // console.log(arr, m, l, r, count, "count");
  return count;
}
