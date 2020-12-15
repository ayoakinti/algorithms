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
      // // console.log(treeTraversal(vertices));
      let result = treeTraversal(vertices);
      // console.log(result);
      if (result.length) {
        for (let j = 0; j < result.length; j++) {
          console.log(result[j]);
        }
      }

      rl.close();
    }
  });
});

function treeTraversal(arr) {
  // console.log(arr, "input");

  let output = [];
  var inorder = "";
  var preorder = "";
  var postorder = "";

  let inOrder = () => {
    let stack = [];
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

      inorder += element[0] + " ";
      let index = element[2];
      element = arr[index];
    }

    return inorder;
  };

  let preOrder = () => {
    let stack = [];
    let element = arr[0];
    while (true) {
      while (element) {
        stack.push(element);
        preorder += element[0] + " ";
        let index = element[1];
        element = arr[index];
      }
      // console.log(stack, "preorder after initial stunt");
      if (!stack.length) {
        break;
      }
      element = stack.pop();
      let index = element[2];
      element = arr[index];
    }

    return preorder;
  };

  let postOrder = () => {
    let stack = [];
    let element = arr[0];
    while (true) {
      // console.log(element, "while loop");
      if (element) {
        stack.push(element);
        let index = element[1];
        element = arr[index];
      // console.log(stack, "inorder after initial stunt");
      // console.log(postorder, "postorder after initial stunt");
      } else {
        if (!stack.length) {
          break;
        } else {
          if(stack[stack.length-1][2] == -1){
            element = stack.pop();
            postorder += element[0] + " ";
            // console.log(element, "element after right is null");
            // console.log(postorder2, "postorder2 after right is null");
            // console.log(stack, "stack after right is null");
            // console.log(arr[stack[stack.length-1][2]], "stack arr top-most after right is null");
            if(stack.length){
              while(element == arr[stack[stack.length-1][2]]){
                element = stack.pop();
                postorder += element[0] + " ";
                // console.log(stack, "stack after element was equal to top most arr");
                // console.log(postorder, "postorder after element was equal to top most arr");
                if(!stack.length){
                  break;
                }
              }
            }
          }
          if(stack.length){
            element = arr[stack[stack.length-1][2]];
          } else {
            element = null;
          }
        }
      }
      
    }

    return postorder;
  };

  // output.push(inOrder1(0));
  output.push(inOrder());
  // console.log(inorder, "result after inorder");
  output.push(preOrder());
  // console.log(preorder, "result after preorder");
  output.push(postOrder());
  // console.log(postorder, "result after postorder");
  // console.log(output);
  return output;
}

// function inOrder1(arr, index) {
//   // console.log(arr, index, "input");
//   let element = arr[index];
//   // console.log(element, "element");
//   if (element[0] != null) {
//     // console.log(result, "result");
//     let leftIndex = element[1];
//     let rightIndex = element[2];
//     if (leftIndex != -1) {
//       inOrder1(arr, leftIndex);
//     }
//     inorder += element[0] + " ";
//     if (rightIndex != -1) {
//       inOrder1(arr, rightIndex);
//     }
//   }

//   return inorder;
// }

// function preOrder(arr, index) {
//   // console.log(arr, index, "input");
//   let element = arr[index];
//   // console.log(element, "element");
//   if (element[0] != null) {
//     preorder += element[0] + " ";
//     // console.log(result, "result");
//     let leftIndex = element[1];
//     let rightIndex = element[2];
//     if (leftIndex != -1) {
//       preOrder(arr, leftIndex);
//     }
//     if (rightIndex != -1) {
//       preOrder(arr, rightIndex);
//     }
//   }

//   return preorder;
// }

// function postOrder1(arr, index) {
//   // console.log(arr, index, "input");
//   let element = arr[index];
//   // console.log(element, "element");
//   if (element[0] != null) {
//     // console.log(result, "result");
//     let leftIndex = element[1];
//     let rightIndex = element[2];
//     if (leftIndex != -1) {
//       postOrder1(arr, leftIndex);
//     }
//     if (rightIndex != -1) {
//       postOrder1(arr, rightIndex);
//     }
//     postorder += element[0] + " ";
//   }

//   return postorder;
// }

