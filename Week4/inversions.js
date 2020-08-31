const readline = require("readline");
const { count } = require("console");
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
    let inversion = 0;

    // console.log(inversions(arr));
    let solution = inversionsfast(arr, initial, length)
    console.log(solution[1]);
    // console.log(arr, "arr");
    rl.close();
  });
});

// function inversions(arr) {
//     let inversion = 0;
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i+1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 inversion++;
//             }
//         }
//     }
//     return inversion;
// }

// function inversionsfast(arr, l, r) {
//     let leftarr = [];
//     let rightarr = [];
//     if(arr.length < 1){
//         return arr;
//     }
//     for(let i = l+1; i < r; i++){
//         if(arr[i] <= arr[l]){
//             leftarr.push(arr[i]);
//             // inversion++;
//         } else if (arr[i] > arr[l]){
//             rightarr.push(arr[i]);
//         }
//     }
//     let length1 = leftarr.length;
//     let length2 = rightarr.length;
//     // console.log(inversion, "inversion");
//     return [...inversionsfast(leftarr, 0, length1), arr[l], ...inversionsfast(rightarr, 0, length2)];
// }

function inversionsfast(arr, l, r) {
//   console.log(arr, l, r, "inputs");
  m = Math.ceil(l + (r - l) / 2);
//   console.log(m, "m");
  let final = [];
  if (l == r - 1) {
    final.push([arr[l]], 0);
    return final;
  } else {
    let inv1 = inversionsfast(arr, l, m);
    let inv2 = inversionsfast(arr, m, r);
    let inversion = inv1[1]+inv2[1];
    // merge(inv1, inv2);
    // console.log(inv1, inv2, "invs");
    return merge(inv1[0], inv2[0], inversion);
    // if (inv1 > inv2){
    //     console.log(inv2, inv1, "inv");
    //     // console.log(inv1-inv2, "sub")
    //     final.push(...inv2, ...inv1);
    //     return final;
    // } else {
    //     console.log(inv1, inv2, "lesser");
    //     final.push(...inv1, ...inv2);
    //     return final;
    // }
  }
}

function merge(arr1, arr2, inversion) {
  let merge = [];
  let i = 0;
  let j = 0;
//   console.log(inversion, "merge inversion");
  // for(let i = 0; i < arr1.length; i++){
  //     for(let j = 0; j < arr2.length; j++){
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merge.push(arr1[i]);
    //   console.log(i, "i");
      i++;
    // inversion++;

    //   console.log(i, "i+1");
    } else if (arr1[i] > arr2[j]) {
      merge.push(arr2[j]);
    //   console.log(j, "j");
    // console.log(inversion, "initial inv");
      inversion+=arr1.length-i;
    //   console.log(i, j, inversion, "inversion");
      j++;

    //   console.log(j, "j+1");
    }
  }

  while (i < arr1.length) {
    //   console.log(i, "second i");
    merge.push(arr1[i]);
    i++;
    // inversion++;

  }
  while (j < arr2.length) {
    // console.log(j, "second j");
    merge.push(arr2[j]);
    j++;
    // inversion++;
  }
//   console.log(merge, "merge");
  return [merge, inversion];
}
