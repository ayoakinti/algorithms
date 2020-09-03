const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", () => {
  rl.on("line", (line) => {
    const profit = line.toString().split(" ").map(Number);

    rl.on("line", (line) => {
      const clicks = line.toString().split(" ").map(Number);

      //   console.log(subsequence(number1, number2));
    //   console.log(sort(profit));
    //   console.log(sort(clicks));
      console.log(max(sort(profit), sort(clicks)));
      rl.close();
    });
  });
});

function sort(array) {
    if(array.length == 1){
        // console.log("length is one");
        return array;
    }
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    // console.log(i, "i");
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
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

function max(a, b) {
    let maxRevenue = 0;
    for(let i = 0; i < a.length; i++){
        maxRevenue += a[i] * b[i];
    }

    return maxRevenue;
}
