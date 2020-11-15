const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = Number(line);
  rl.on("line", (line) => {
    const input = line.toString().split(" ").map(Number);
    rl.on("line", (line) => {
      const m = Number(line);
      //   console.log(maxSlide(n, input, m));
      let result = maxSlide(n, input, m);
      let res = "";
      for (let i = 0; i < result.length; i++) {
        res += result[i] + " ";
      }
      console.log(res);
      rl.close();
    });
  });
});

function maxSlide(n, input, m) {
  // console.log(n, input, m, "inputs");
  let queue = [];
  let maxQueue = [];
  let maxResult = [];
  for (let i = 0; i < m; i++) {
    let added = input[i];
    queue.push(added);
    if (i == 0) {
      maxQueue.push(added);
      //   console.log(maxQueue, i);
    } else {
      if (added >= maxQueue[0]) {
        if (added == maxQueue[0]) {
          maxQueue.unshift(added);
        } else {
          maxQueue = [];
          maxQueue.unshift(added);
        }
        // console.log(maxQueue, i);
      } else if (added >= maxQueue[maxQueue.length - 1]) {
        let length = maxQueue.length;
        for (let i = length - 1; i > 0; i--) {
          if (added >= maxQueue[i]) {
            maxQueue.pop();
          }
        }
        // console.log(maxQueue, i, "after pop");
        maxQueue.push(added);
        // console.log(maxQueue, i, "after adding new element");
      } else if (maxQueue.length == 1) {
        maxQueue.push(added);
      } else {
        maxQueue.push(added);
      }
    }
    if (i == m - 1) {
      maxResult.push(maxQueue[0]);
    }
  }
  //   console.log(queue, "queue after first m");
  //   console.log(maxQueue, "maxQueue after first m");
  //   console.log(maxResult, "maxResult after first m");
  for (let i = 0; i < n - m; i++) {
    let removed = queue[0];
    queue.shift();
    let added = input[i + m];
    queue.push(added);
    // console.log(added, "recently added");
    // console.log(queue, i, "queue");
    if (maxQueue[0] == removed) {
      maxQueue.shift();
      if (added >= maxQueue[0] || !maxQueue.length) {
        if (added == maxQueue[0]) {
          maxQueue.unshift(added);
        } else {
          maxQueue = [];
          maxQueue.unshift(added);
        }
      } else if (added >= maxQueue[maxQueue.length - 1]) {
        let length = maxQueue.length;
        //   console.log(maxQueue, i, "before pops");
        for (let i = length - 1; i > 0; i--) {
          if (added >= maxQueue[i]) {
            maxQueue.pop();
          }
        }
        //   console.log(maxQueue, i, "after pops");
        maxQueue.push(added);
        //   console.log(maxQueue, i, "after adding new element");
      } else if (maxQueue.length == 1) {
        maxQueue.push(added);
      } else {
        maxQueue.push(added);
      }
      //   console.log(maxQueue, i + m);
      maxResult.push(maxQueue[0]);
    } else if (added >= maxQueue[0]) {
      if (added == maxQueue[0]) {
        maxQueue.unshift(added);
      } else {
        maxQueue = [];
        maxQueue.unshift(added);
      }
      //   console.log(maxQueue, i + m);
      maxResult.push(maxQueue[0]);
    } else if (added >= maxQueue[maxQueue.length - 1]) {
      let length = maxQueue.length;
      //   console.log(maxQueue, i, "before pops");
      for (let i = length - 1; i > 0; i--) {
        if (added >= maxQueue[i]) {
          maxQueue.pop();
        }
      }
      //   console.log(maxQueue, i, "after pops");
      maxQueue.push(added);
      //   console.log(maxQueue, i, "after adding new element");
      maxResult.push(maxQueue[0]);
    } else {
      //   console.log(maxQueue, "no condition before");
      maxQueue.push(added);
      //   console.log(maxQueue, "no condition after");
      maxResult.push(maxQueue[0]);
    }
  }
  // console.log(queue, "queue");
  //   console.log(maxQueue, "maxQueue");
  //   console.log(maxResult, "maxResult");
  return maxResult;
}
