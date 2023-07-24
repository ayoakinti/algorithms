const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const [n, m] = line.toString().split(" ").map(Number);
  let count = 0;
  const mergequeries = [];

  rl.once("line", (line) => {
    const size = line.toString().split(" ").map(Number);

    rl.on("line", (line) => {
      const mergequery = line.toString().split(" ").map(Number);

      mergequeries.push(mergequery);
      count++;

      if (count == m) {
        // console.log(mergeTable(n, m, size, mergequeries));
        let result = mergeTable(n, m, size, mergequeries);
        if (result.length) {
          for (let i = 0; i < result.length; i++) {
            // let res = "";
            // let res = result[1][i][0] + " " + result[1][i][1]
            // console.log(res);
            console.log(result[i]);
          }
        }

        rl.close();
      }
    });
  });
});

function mergeTable(n, m, rank, mergequeries) {
  // console.log(n, m, rank, mergequeries, "inputs");
  // Gets the max Size from the available tables at the beginning
  let maxSize = Math.max(...rank);
  // console.log(maxSize, "max size");
  // Initialize output array that would push the maxSize after each mergequery
  let output = [];
  // Initialize array to track the parent
  let parent = new Array(n);
  // console.log(parent);
  for (let i = 0; i < m; i++) {
    // console.log(mergequeries[i]);
    let source = mergequeries[i][1];
    let destination = mergequeries[i][0];
    // console.log(rank[destination - 1]);
    // console.log(rank[source - 1]);
    if (!parent[destination - 1]) {
      parent[destination - 1] = destination;
    }
    if (!parent[source - 1]) {
      parent[source - 1] = source;
    }
    // console.log(parent[destination - 1]);
    // console.log(parent[source - 1]);
    source = Find(parent, source);
    destination = Find(parent, destination);
    // console.log(parent, "after findings");
    // console.log(source, "new Source");
    // console.log(destination, "new destination");
    if (source != destination) {
      if(rank[source-1] > rank[destination-1]){
        let clone = source;
        source = destination;
        destination = clone;
        // console.log(i, "source was greater");
      }
      parent[source - 1] = destination;
      rank[destination - 1] += rank[source - 1];
      rank[source - 1] = 0;
      if(rank[destination-1] > maxSize){
        maxSize = rank[destination-1];
      }
      output.push(maxSize);
      // console.log(rank, i, "rank");
      // console.log(parent, i, "parent");
    } else {
      output.push(maxSize);
    }
  }
  return output;
}

function Find(parent, i) {
  // console.log(parent, i, "input for find");
  if (parent[i - 1] == i) {
    // console.log(i, "returned i");
    return parent[i - 1];
  } else {
    parent[i - 1] = Find(parent, parent[i - 1]);
  }
  return parent[i - 1];
  // return Find(parent, parent[i-1])
}
