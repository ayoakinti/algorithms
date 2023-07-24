const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [n, m] = line.toString().split(" ").map(Number);

  rl.on("line", (line) => {
    const input = line.toString().split(" ").map(Number);

    // console.log(parallelProcessing(n, m, input));

    let result = parallelProcessing(n, m, input);
    if (result.length) {
      for (let i = 0; i < result.length; i++) {
        // let res = "";
        // let res = result[1][i][0] + " " + result[1][i][1]
        // console.log(res);
        console.log(result[i]);
      }
    }

    rl.close();
  });
});

function parallelProcessing(n, m, input) {
  // console.log(n, m, input, "inputs");
  let minHeap = [];
  let output = [];
  let j = 0;
  for (let i = 0; i < m; i++) {
    // console.log(i, "i");
    if (i < n) {
      insert(minHeap, [j, 0, input[i]]);
      output.push(j + " " + 0);
      j++;
      // console.log(j, "j");

      // console.log(threads, i, "i < n");
      // console.log(output, i, "i < n");
      // console.log(i, "i < n");
    } else {
      let oldElement = minHeap[0];
      // console.log(oldElement, "oldElement");
      let newElement = [];
      newElement[0] = oldElement[0];
      newElement[1] = oldElement[2];
      newElement[2] = oldElement[2] + input[i];
      // console.log(newElement, "newElement");
      output.push(newElement[0] + " " + newElement[1]);
      extractMin(minHeap);
      insert(minHeap, newElement);
    }
  }
  // console.log(minHeap, "minHeap");
  // console.log(output, "output");
  return output;
}

function siftDown(arr, i) {
  // console.log("entered siftdown");
  // console.log(i, "i");
  let minIndex = i;
  let leftIndex = 2 * i + 1;
  let rightIndex = 2 * i + 2;
  if (arr[rightIndex] && arr[rightIndex][2] <= arr[minIndex][2]) {
    if (arr[rightIndex][2] == arr[minIndex][2]) {
      if (arr[rightIndex][0] < arr[minIndex][0]) {
        minIndex = rightIndex;
      }
    } else {
      minIndex = rightIndex;
    }
  }
  if (arr[leftIndex] && arr[leftIndex][2] <= arr[minIndex][2]) {
    if (arr[leftIndex][2] == arr[minIndex][2]) {
      if (arr[leftIndex][0] < arr[minIndex][0]) {
        minIndex = leftIndex;
      }
    } else {
      minIndex = leftIndex;
    }
  }
  if (minIndex !== i) {
    let clone = arr[i];
    // console.log(i, minIndex);
    arr[i] = arr[minIndex];
    arr[minIndex] = clone;
    return siftDown(arr, minIndex);
  }
}

function siftUp(arr, i) {
  // console.log(arr, i, "entered siftup");
  let parentIndex;
  if (i % 2 == 0) {
    parentIndex = (i - 2) / 2;
  } else {
    parentIndex = (i - 1) / 2;
  }
  // console.log(parentIndex, "parentIndex");
  if (arr[parentIndex][2] >= arr[i][2]) {
    if (arr[parentIndex][2] == arr[i][2]) {
      // console.log("equal times");
      if (arr[parentIndex][0] > arr[i][0]) {
        let clone = arr[parentIndex];
        arr[parentIndex] = arr[i];
        arr[i] = clone;
        if(parentIndex != 0){
          return siftUp(arr, parentIndex);
        }
      }
    } else {
      // console.log("different times");
      let clone = arr[parentIndex];
      arr[parentIndex] = arr[i];
      arr[i] = clone;
      if(parentIndex != 0){
        return siftUp(arr, parentIndex);
      }
    }
  }
}

function insert(arr, newElement) {
  // console.log("entered insert");
  if (arr.length < 1) {
    arr.push(newElement);
  } else {
    arr.push(newElement);
    let index = arr.length-1;
    siftUp(arr, index);
  }
}

function extractMin(arr) {
  // console.log("entered extractMin");
  let index = arr.length - 1;
  arr[0] = arr[index];
  arr.pop();
  siftDown(arr, 0);
}
