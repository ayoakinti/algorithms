const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = Number(line);
  const segments = [];
  let count = 0;
  rl.on("line", (line) => {
    let segment = line.toString().split(" ").map(Number);
    segments.push(segment);
    count++;
    if (count == n) {
      // console.log(segments);
      sort(segments);
    //   console.log(segments);
      // console.log(intersections(segments[0], segments[1]));
      let result = minSignatures(segments);
      // console.log(...minSignatures(segments)[1]);
      console.log(result[0]);
      // console.log(result[1]);
      // sort(result[1]);
      console.log(...result[1]);
      rl.close();
    }
  });
});

function sort(array) {
  if (array.length == 1) {
    // console.log("length is one");
    return array;
  }
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    // console.log(i, "i");
    for (let j = i + 1; j < array.length; j++) {
      if (array[i][0] < array[j][0]) {
        continue;
      } else {
        // console.log(j, "j");
        let clone = array[j];
        array[j] = array[i];
        array[i] = clone;
      }
    }
  }
  return array;
}

function minSignatures(arr) {
  // console.log(arr, "input");
  if (arr.length == 1) {
    // console.log(arr[0], "arr[0]")
    return [1, [arr[0][1]]];
  }
  // console.log(arr[0][0])
  // console.log(arr[0][1])
  // for(let i = 1; i < arr.length; i++){
  //     // console.log(i, "i");
  //     // for(let j = arr[0][0]; j <= arr[0][1]; j++){
  //     // console.log(j, "j");
  //     //     if(arr[i][0] == j){
  //     //         console.log("match");
  //     //         // console.log(j, "j");
  //     //     }
  //     // }
  //     // if(arr[])
  // }
  let i = 0;
  let countInt = 0;
  let countUnint = 0;
  let countExtra = 0;
  let intArray = [];
  let UnintArray = [];

  while (i <= arr.length - 2) {
    // console.log(i, "i");
    let int = intersections(arr[i], arr[i + 1]);
    // console.log(int);
    // console.log(count);
    if (int.length) {
      if (i == arr.length - 2) {
        countInt++;
        // i++;
        intArray.push(int);
        arr[i] = int;
        // console.log(int, "int");
        // console.log(arr[i], "arr int");
        break;
      } else {
        countInt++;
        i++;
        intArray.push(int);
        arr[i] = int;
        // console.log(int, "int");
        // console.log(arr[i], "arr int");
      }
    } else {
      countUnint++;
      //   if (i == 0) {
      //     UnintArray.push(arr[i]);
      //     console.log(int, "no int");
      //   console.log(arr[i], "arr no int");
      //     break;
      //   }
      UnintArray.push(arr[i]);
    //   console.log(int, "no int");
    //   console.log(arr[i], "arr no int");
      if (i == arr.length - 2) {
        countExtra++;
        UnintArray.push(arr[i + 1]);
        // console.log(int, "no int");
        // console.log(arr[i + 1], "arr no int");
        // break;
      }

      i++;
    }
  }
//   console.log(countInt, "int count");
//   console.log(countUnint, "unint count");
//   console.log(intArray, "int arr");
//   console.log(UnintArray, "unint arr");
  let count;
  let countArray = [];
  if (!countUnint) {
    count = 1;

    countArray.push(intArray[intArray.length - 1][1]);
  } else {
    count = countUnint + 1;
    for (let i = 0; i < UnintArray.length; i++) {
      countArray.push(UnintArray[i][1]);
    }
    if (countInt && !countExtra) {
      countArray.push(intArray[intArray.length - 1][1]);
    }
  }
  return [count, countArray];
}

function intersections(a, b) {
  let int = [];
  if (a[1] < b[0]) {
    return [];
  } else {
    int.push(b[0]);
  }
  if (a[1] >= b[1]) {
    int.push(b[1]);
  } else {
    int.push(a[1]);
  }
  return int;
}
