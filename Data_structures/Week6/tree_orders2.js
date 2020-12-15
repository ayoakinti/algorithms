const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = Number(line);
  let count = 0;
  let vertices = [];

  rl.on("line", (line) => {
    const vertix = line.toString().split(" ").map(Number);
    vertices.push(vertix);

    count++;

    if (count == n) {
      console.log(treeTraversal(vertices));

      rl.close();
    }
  });
});

function treeTraversal(arr) {
  console.log(arr, "input");
  let tree = [];
  tree[0] = {
    number: arr[0][0],
    checked: false,
  };
  for (let i = 0; i < arr.length; i++) {
    let left = arr[i][1];
    let right = arr[i][2];
    if (left != -1) {
      tree[2 * i + 1] = {
        number: arr[left][0],
        checked: false,
      };
    }
    // else {
    //     tree[2*i +1] = null;
    // }
    if (right != -1) {
      tree[2 * i + 2] = {
        number: arr[right][0],
        checked: false,
      };
    }
    // else {
    //     tree[2*i +2] = null;
    // }
  }
  let output = [];
  //   output.push(inOrder(tree,0, ""));
  // output.push(preOrder(tree,0, ""));
  output.push(postOrder(tree, 0, ""));
  return output;
}

function inOrder(arr, i, output) {
  console.log(arr, i, output);
}

function preOrder(arr, i, output) {
  console.log(arr, i, output);
}

function postOrder(arr, i, output) {
  console.log(arr, i, output);
  if (!arr[2 * i + 1]) {
    output += arr[i].number;
  } else {
    leftIndex = 2 * i + 1;
    rightIndex = 2 * i + 2;
    if(arr[leftIndex]){
      postOrder(arr, leftIndex, output);
    }
    if(arr[rightIndex]){
      postOrder(arr, rightIndex, output);
    }
  }
}
