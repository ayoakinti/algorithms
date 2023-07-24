function search(store, input) {
  let min = store[0];
  let max = store[store.length - 1];
  // for(let i = 0; i < input.length; i++){
  for (let j = 0; j < store.length; j++) {
    if (input < min || input > max) {
      return -1;
    }
    if (input == store[j]) {
      return j;
    }
  }
  return -1;
  // }
}
function searchFast(arr, b, l, r) {
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

  while (l <= r) {
    let m = Math.ceil(l + (r - l) / 2);
    // console.log(m, "center");
    // console.log(arr[l], arr[r-1], "final and initial");
    if (arr[l] > b || arr[r - 1] < b) {
      return -1;
    } else if (arr[m - 1] == b) {
      // console.log("equal");
      return m - 1;
    } else if (b < arr[m - 1]) {
      // console.log(m-1, "lesser");
      r = m - 1;
    } else {
      // console.log(m, "greater");
      l = m;
      // return -4;
    }
  }
}

// let arr = [2, 3, 4];
// let input = [0, 4, 2, 7];

// console.log(search2, "fast");

function compare(arr1, arr2) {
  for (i in arr1) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

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

while (true) {
  const n = Math.ceil(Math.random() * 6);
  const k = Math.ceil(Math.random() * 12);
  console.log(n, "num store");
  console.log(k, "num input");
  var store = [];
  var input = [];
  //   console.log("\n");
  for (let i = 0; i < n; i++) {
      let cons = Math.ceil(Math.random() * 100);
      if(store.indexOf(cons) < 0){
        store.push(cons);
      }
  }
  for (let i = 0; i < k; i++) {
    input.push(Math.ceil(Math.random() * 100));
  }
  store = sort(store);
  console.log(store);
  console.log(input);
  let final = store.length;

  let search1 = [];
  let search2 = [];

  for (i in input) {
    // console.log(i, "i");
    search1.push(search(store, input[i]));
  }
  for (i in input) {
    search2.push(searchFast(store, input[i], 0, final));
  }
//   console.log(search2, "fast");
  if (!compare(search1, search2)) {
    // if (search1.length != search2.length) {
    console.log(`Different`);
    console.log(`${search1}`);
    console.log(`${search2}`);
    break;
  } else {
    console.log("Same");
    // console.log(...search1, "slow");
    // console.log(...search2, "fast");
  }
}
