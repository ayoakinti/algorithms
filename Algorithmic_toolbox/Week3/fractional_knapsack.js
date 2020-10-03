// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");

rl.once("line", (line) => {
  const [itemsCount, knapsackCapacity] = line.toString().split(" ").map(Number);
  const values = [];
  const weights = [];
  let count = 0;

  rl.on("line", (line) => {
    const [v, w] = line.toString().split(" ").map(Number);
    values.push(v);
    weights.push(w);
    count++;

    if (count >= itemsCount) {
      console.log(max(itemsCount, knapsackCapacity, values, weights));
      process.exit();
    }
  });
});

// function sort(numbers) {
//   let arr = [];
//   for (let i = 0; i < numbers.length; i++) {}
// }

function sort(array) {
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    // console.log(i, "i");
    for (let j = i+1; j < array.length; j++) {
      if (array[i].vperw > array[j].vperw) {
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

function max(count, capacity, values, weights) {
  // write your code here
  // console.log(count, "count");
  // console.log(capacity, "capacity");
  // console.log(values, "values");
  // console.log(weights, "weights");
  let fractionarray = [];
  for (let i = 0; i < values.length; i++) {
    fractionarray.push({
      value: values[i],
      weight: weights[i],
      vperw: values[i] / weights[i],
    });
  }
//   console.log(fractionarray, "before sorting");

//   console.log(sort(fractionarray), "after sorting");
  fractionarray = sort(fractionarray);
  //   if (!sort(fractionarray)) {
  //     let clone = fractionarray[1];
  //     fractionarray[1] = fractionarray[0];
  //     fractionarray[0] = clone;
  //   }
  //   console.log(fractionarray, "after sorting");
  let totalValue = 0;
  for (let i = 0; i < fractionarray.length; i++){
      if(capacity == 0){
          break;
      }
      if(capacity >= fractionarray[i].weight){
          totalValue += fractionarray[i].value;
          capacity -= fractionarray[i].weight;
          // console.log(capacity);
      } else {
          totalValue += Number((capacity * fractionarray[i].value/fractionarray[i].weight).toFixed(4));
          capacity = 0;
      }
  }
  return totalValue;
}

module.exports = max;
