const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", () => {
  rl.on("line", (line) => {
    const parents = line.toString().split(" ").map(Number);

    console.log(buildTree(parents));
    
    rl.close();
  });
});

function buildTree(arr) {
//   console.log(arr, "input");
  let parentnode;
  let parent = [];
  let nodes = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      parentnode = i;
    } else {
      if (typeof parent[arr[i]] == "object") {
        // console.log("is array");
        parent[arr[i]].push(i);
      } else {
        parent[arr[i]] = [];
        // console.log(typeof parent[arr[i]]);
        parent[arr[i]].push(i);
      }
    }
    nodes.push({
      visited: false,
      height: 0,
      parent: arr[i]
    });
  }
  // console.log(parent, "parent");
  // console.log(nodes, "nodes");
  // console.log(parentnode, "parentnode");
  // console.log(parent[parentnode], "parent tree");
  return maxDepth(parent, parentnode, nodes);
}

function maxDepth(parent, parentnode, nodes) {
  // console.log(parent, parentnode, nodes, "nodes");
  let length = nodes.length;
  // console.log(length, "length of nodes");
  let height = 1;

  nodes[parentnode] = {
    visited: true,
    height: 1,
    parent: -1
  };

  let breadth = parent[parentnode];

  // console.log(breadth, "breadth");
    for(let i = 0; i < length-1; i++){
      let currentheight = 1+nodes[nodes[breadth[0]].parent].height;
      if(currentheight > height){
        height = currentheight;
      }
      nodes[breadth[0]] = {
        visited: true,
        height: currentheight,
        parent: nodes[breadth[0]].parent
      };
      // console.log(nodes, i, "nodes after update");
      // console.log(parent[breadth[0]], "parent of current breadth");
      if(parent[breadth[0]]){
        // console.log("there is parent");
        for(let i = 0; i < parent[breadth[0]].length; i++){
          breadth.push(parent[breadth[0]][i]);
        }
      }
      breadth.shift();
      // console.log(breadth, i, "breadth after update");
    }

  // console.log(nodes, "nodes");
  // console.log(height, "height");
  // console.log(time, "time after code");
  return height;
}

