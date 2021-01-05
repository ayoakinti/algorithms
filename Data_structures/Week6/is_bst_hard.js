const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = Number(line);
  if (n == 0) {
    console.log("CORRECT");
    rl.close();
  }
  let count = 0;
  let vertices = [];

  rl.on("line", (line) => {
    const vertix = line.toString().split(" ").map(Number);
    vertices.push(vertix);

    count++;

    if (count == n) {
      console.log(checkTree(vertices));
      //   let result = treeTraversal(vertices);
      // console.log(result);
      //   if (result.length) {
      //     for (let j = 0; j < result.length; j++) {
      //       console.log(result[j]);
      //     }
      //   }

      rl.close();
    }
  });
});

// let inorder = "";
function checkTree(arr) {
  // console.log(arr, "input");

  return inOrder(arr);
}

function inOrder(arr) {
  let stack = [];
  let result = [];
  let element = arr[0];
  let left = true;
  while (true) {
    while (element) {
      stack.push(element);
      let index = element[1];
      element = arr[index];
      if (element) {
        left = true;
      }
      // console.log(element, "element");
    }
    // console.log(stack, "inorder after initial stunt");
    if (!stack.length) {
      break;
    }
    element = stack.pop();

    // inorder += element[0] + " ";
    result.push(element);
    let length = result.length;
    // console.log(left, "left");
    // console.log(result[length-2], "previous entry");
    // console.log(result[length-1], "current entry");
    if (length > 1 && result[length - 2][0] > result[length - 1][0]) {
      return "INCORRECT";
    }
    if (length > 1 && result[length - 2][0] == result[length - 1][0]) {
      let minRight;
      let lastElement = result[length - 1];
      // console.log(lastElement, "lastElement");
      let previousElement = result[length - 2];
      // console.log(previousElement, "previousElement");
      if (previousElement[2] == -1) {
        return "INCORRECT";
      } else {
        let rightIndex = previousElement[2];
        minRight = arr[rightIndex][0];
        // console.log(rightIndex, "rightIndex");
        while (arr[rightIndex][1] != -1) {
          minRight = arr[rightIndex][0];
          // console.log(minRight, "minRight");

          rightIndex = arr[rightIndex][1];
          // console.log(rightIndex, "rightIndex");

          if (arr[rightIndex][1] == -1) {
            minRight = arr[rightIndex][0];
            // console.log(minRight, "minRight when left most was found");
          }
        }
        // console.log(minRight, "minright after the whole loop");
        if (minRight != lastElement[0]) {
          return "INCORRECT";
        }
      }
    }
    let index = element[2];
    element = arr[index];
    if (element) {
      left = false;
    }
  }

  // console.log(result, "result");
  return "CORRECT";
}
