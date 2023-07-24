const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = line.toString().split(" ").map(Number);
  let count = 0;
  const queries = [];

  rl.on("line", (line) => {
    const query = line.toString().split(" ");

    queries.push(query);
    count++;

    if (count == n) {
    //   console.log(printStack(queries));

      let result = printStack(queries);
    //   let res = "";
      if(result.length){
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
          }
      }

      rl.close();
    }
  });
});

function printStack(queries) {
//   console.log(queries, "input");
  let result = [];
  let maxResult = [];
  let max = [];
  for (let i = 0; i < queries.length; i++) {
    if (queries[i][0] == "push") {
        let push_query = Number(queries[i][1]);
        
      result.unshift(push_query);
      if(max.length == 0){
        max.unshift(push_query);
      } else
      if(push_query >= max[0]){
        max.unshift(push_query);
      } 
    } else if (queries[i][0] == "pop") {
        let removed = result[0];
        result.shift();
        if(removed == max[0]){
            max.shift();
            // console.log(result, "result at finding new max")
            // console.log(max, "new max after pop");
        }
    } else if (queries[i][0] == "max") {
        maxResult.push(max[0]);
    }
  }
//   console.log(max, "max");
//   console.log(result, "result");
//   console.log(maxResult, "maxResult");

  return maxResult;
}
