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
    let initial = Math.floor(Math.random() * length);

    console.log(...sort(arr, initial, length));
    rl.close();

    // let output = sort(arr, initial, length);

    // const res = output.join(" ");
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
});

function sort(arr, l, r) {
  // console.log(arr, l, r, "inputs");
  if (arr.length < 1) {
    return arr;
  }
  let leftarr = [];
  let rightarr = [];
  let middlearr = [];
  for (let i = 0; i < r; i++) {
    // console.log(l, i, arr[i], "i");
    if (arr[i] < arr[l]) {
      leftarr.push(arr[i]);
    } else if (arr[i] > arr[l]) {
      rightarr.push(arr[i]);
    } else {
      middlearr.push(arr[i]);
    }
    // else if (arr[i] == arr[l]){

    // }
  }
  // console.log(leftarr, middlearr, rightarr, "arrs");
  let length1 = leftarr.length;
  let initial1 = Math.floor(Math.random() * length1);
  let length2 = rightarr.length;
  let initial2 = Math.floor(Math.random() * length2);
  //   console.log(leftarr, rightarr, "left and right");
  //   if (length1 == 1 && length2 == 1) {
  return [
    ...sort(leftarr, initial1, length1),
    ...middlearr,
    ...sort(rightarr, initial2, length2),
  ];
  //   }
  //   else {
  //     //   sort(leftarr, 0, length1);
  //       sort(rightarr, 0, length2);
  //   }
  // console.log(sort(leftarr));
  // return [...sort(leftarr, 0, leftarr.length),...middlearr,...sort(rightarr, 0, rightarr.length)];
}
