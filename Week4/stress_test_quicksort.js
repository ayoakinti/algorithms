function sort(array) {
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    // console.log(i, "i");
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
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

function compare(arr1, arr2) {
  for (i in arr1) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

function sortFast(arr, l, r) {
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
  //   console.log(leftarr, middlearr, rightarr, "arrs");
  let length1 = leftarr.length;
  let initial1 = Math.floor(Math.random() * length1);
  let length2 = rightarr.length;
  let initial2 = Math.floor(Math.random() * length2);
  //   console.log(leftarr, rightarr, "left and right");
  //   if (length1 == 1 && length2 == 1) {
  return [
    ...sortFast(leftarr, initial1, length1),
    ...middlearr,
    ...sortFast(rightarr, initial2, length2),
  ];
  //   }
  //   else {
  //     //   sort(leftarr, 0, length1);
  //       sort(rightarr, 0, length2);
  //   }
  // console.log(sort(leftarr));
  // return [...sort(leftarr, 0, leftarr.length),...middlearr,...sort(rightarr, 0, rightarr.length)];
}
// let arr = [3, 3, 9, 2, 2, 4, 5, 1, 7, 8, 8, 9];
// l = arr.length;
// console.log(sort(arr));
// console.log(sortFast(arr, 0, l), "fast");

while (true) {
  const n = Math.ceil(Math.random() * 10000);
  //   console.log(n, "num store");
  var input = [];
  //   console.log("\n");
  for (let i = 0; i < n; i++) {
    input.push(Math.ceil(Math.random() * 5));
  }
  console.log(input);
  let final = input.length;
  let initial = Math.floor(Math.random() * final);

  let sort1 = sort(input);
  let sort2 = sortFast(input, initial, final);
  //   console.log(sort2, "fast");
  if (!compare(sort1, sort2)) {
    console.log(`Different`);
    console.log(`${sort1}`);
    console.log(`${sort2}`);
    break;
  } else {
    // console.log(`${sort1}`);
    console.log("Same");
  }
}
