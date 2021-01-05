const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = Number(line);
  if(n == 0){
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
  while (true) {
    while (element) {
      stack.push(element);
      let index = element[1];
      // console.log(index, "index");
      element = arr[index];
      // console.log(element, "element");
    }
    // console.log(stack, "inorder after initial stunt");
    if (!stack.length) {
      break;
    }
    element = stack.pop();

    // inorder += element[0] + " ";
    result.push(element[0]);
    let length = result.length;
    if(length>1 && result[length -2] > result[length-1]){
      return "INCORRECT";
    }
    let index = element[2];
    element = arr[index];
  }

  // console.log(result, "result");
  return "CORRECT";
}
