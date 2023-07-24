function recursiveFast(arr, l, r) {
  //   console.log(arr, l, r, "input");

  if (l == r - 1) {
    return arr[l];
  } else {
    let m = Math.ceil(l + (r - l) / 2);
    // console.log(m, "m");
    let res1 = recursiveFast(arr, l, m);
    let res2 = recursiveFast(arr, m, r);
    // console.log(res1, "res1");
    // console.log(res2, "res2");
    if (res1 == res2) {
      //   console.log("equal recursion");
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
  //   console.log(arr, m, l, r, count, "count");
  return count;
}

function solutionFast(arr, l, r) {
  if (count(arr, recursiveFast(arr, l, r), l, r) > r / 2) {
    return 1;
  } else {
    return 0;
  }
}

function solution(arr) {
  let avg = arr.length / 2;
//   console.log(avg, "avg");
  if(arr.length < 2){
      return 1;
  }
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      if (count > avg) {
        return 1;
      }
    }
  }
  return 0;
}

// console.log(solution([2, 3, 9, 2, 4, 4, 4, 2, 4, 4, 2, 2, 4, 4, 4]));
// console.log(solution([3]));
// console.log(solutionFast([2, 3, 9, 2, 4, 4, 4, 2, 4, 4, 2, 2, 4, 4, 4], 0, 15));

while (true) {
  const n = Math.ceil(Math.random() * 100000);
//   console.log(n, "num store");
  var input = [];
  //   console.log("\n");
  for (let i = 0; i < n; i++) {
    input.push(Math.ceil(Math.random() * 1000000000));
  }
  console.log(input);
  let final = input.length;

  let res1 = solution(input);
  let res2 = solutionFast(input, 0, final);

    // console.log(search2, "fast");
  if (res1 != res2) {
    console.log(`Different`);
    console.log(`${res1}`);
    console.log(`${res2}`);
    break;
  } else {
    console.log("Same");
  }
}
