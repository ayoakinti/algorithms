const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", () => {
  rl.on("line", (line) => {
    const input = line.toString().split(" ").map(Number);
    // console.log(convertHeap(input));
    let result = convertHeap(input);
    console.log(result[0]);
    if (result[1].length) {
      for (let i = 0; i < result[1].length; i++) {
        // let res = "";
        // let res = result[1][i][0] + " " + result[1][i][1]
        // console.log(res);
        console.log(result[1][i]);
      }
    }
    rl.close();
  });
});

// function convertHeap(arr) {
//   //   console.log(arr, "input");
//   let swaps = [];
//   let length = arr.length;
//   let left = false;
//   for (let i = length - 1; i > 0; i = i - 2) {
//     // console.log(arr[i], i, "i");
//     if (i % 2 != 0) {
//       left = false;
//       let parentindex = (i - 1) / 2;
//       let parent = arr[parentindex];
//       if (parent > arr[i]) {
//         swaps.push([parentindex, i]);
//         // swaps.push(parentindex + " " + i);
//         let clone = arr[i];
//         arr[i] = parent;
//         arr[parentindex] = clone;
//       }
//     } else {
//       let leftchild = arr[i - 1];
//       let rightchild = arr[i];
//       let parentindex = (i - 2) / 2;
//       let parent = arr[parentindex];
//       if (leftchild < rightchild) {
//         if (parent > leftchild) {
//           swaps.push([parentindex, i - 1]);
//           // console.log("na me")
//           let childindex = i - 1;
//           //   swaps.push(parentindex + " " + childindex);
//           let clone = arr[i - 1];
//           arr[i - 1] = parent;
//           arr[parentindex] = clone;
//           if (2 * (i - 1) + 2 < length) {
//             i = 2 * (i - 1) + 4;
//             // console.log(i, "i after tweak");
//           } else if (2 * (i - 1) + 1 < length) {
//             i = 2 * (i - 1) + 3;
//             left = true;
//           }
//           //   let newparentIndex = i-1;
//           //   let newLeftChildIndex = (2*newparentIndex)+1;
//           //   let newRightChildIndex = (2*newparentIndex)+2;
//           //   let newLeftChild = arr[newLeftChildIndex];
//           //   let newRightChild = arr[newRightChildIndex];
//           //   if (newLeftChild < newRightChild) {
//           //     if (parent > newLeftChild) {
//           //       swaps.push([newparentIndex, newLeftChildIndex]);
//           //       let clone = arr[newLeftChildIndex];
//           //       arr[newLeftChildIndex] = parent;
//           //       arr[newparentIndex] = clone;
//           //     }
//           //   } else {
//           //     if (parent > newRightChild) {
//           //       swaps.push([newparentIndex, newRightChildIndex]);
//           //       let clone = arr[newRightChildIndex];
//           //       arr[newRightChildIndex] = parent;
//           //       arr[newparentIndex] = clone;
//           //     }
//           //   }
//         }
//       } else {
//         if (parent > rightchild) {
//         //   swaps.push(parentindex + " " + i);
//           swaps.push([parentindex, i]);

//           let clone = arr[i];
//           arr[i] = parent;
//           arr[parentindex] = clone;
//           if (2 * i + 2 < length) {
//             i = 2 * i + 4;
//             // console.log(i, "i after tweak");
//           } else if (2 * i + 1 < length) {
//             //   console.log("less than left child");
//             i = 2 * i + 3;
//             left = true;
//             // console.log(i, "i after tweak");
//           }

//           //   let newparentIndex = i;
//           //   let newLeftChildIndex = (2*newparentIndex)+1;
//           //   let newRightChildIndex = (2*newparentIndex)+2;
//           //   let newLeftChild = arr[newLeftChildIndex];
//           //   let newRightChild = arr[newRightChildIndex];
//           //   if (newLeftChild < newRightChild) {
//           //     if (parent > newLeftChild) {
//           //       swaps.push([newparentIndex, newLeftChildIndex]);
//           //       let clone = arr[newLeftChildIndex];
//           //       arr[newLeftChildIndex] = parent;
//           //       arr[newparentIndex] = clone;
//           //     }
//           //   } else {
//           //     if (parent > newRightChild) {
//           //       swaps.push([newparentIndex, newRightChildIndex]);
//           //       let clone = arr[newRightChildIndex];
//           //       arr[newRightChildIndex] = parent;
//           //       arr[newparentIndex] = clone;
//           //     }
//           //   }
//         }
//       }
//     }
//     if (i % 2 != 0 && !left) {
//       // console.log(left);
//       i++;
//     }
//   }

//   // console.log(arr, "arr");
//   // console.log(swaps, "swaps");
//   let swapslength = swaps.length;
//   return [swapslength, swaps];
// }

function convertHeap(arr) {
  // console.log(arr, "input");
  let n = Math.floor((arr.length) / 2) -1;
  // console.log(n);
  let output = [];
  for(let i = n; i >= 0; i--){
    // console.log(arr, i, "for loop");
    siftDown(arr, i, output);
    // console.log(arr, i, "for loop");
  }
  // console.log(arr, "arr")
  let length = output.length;
  // console.log(length);
  // console.log(output, "output")
  return [length, output]
  // return;
}

function siftDown(arr, i, output) {
  // console.log(i, "i");
  let minIndex = i;
  let leftIndex = 2*i + 1;
  let rightIndex = 2*i + 2;
  if(arr[rightIndex] && arr[rightIndex] < arr[minIndex]){
    minIndex = rightIndex;
  }
  if(arr[leftIndex] && arr[leftIndex] < arr[minIndex]){
    minIndex = leftIndex;
  }
  if(minIndex !== i){
    let clone = arr[i];
    // console.log(i, minIndex);
    output.push(i + " "+ minIndex);
    arr[i] = arr[minIndex];
    arr[minIndex] = clone;
    return siftDown(arr, minIndex, output);
  }
  // return;
}
