const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const number = Number(line);
  // console.log(money);
  console.log(calculator(number, 0)[0]);
  console.log(...calculator(number, 0)[1]);
  rl.close();
});

function calculator(input, rem) {
    // console.log(input);
  let min = [];
  let prev = [];
  min[1] = 0 + rem;
  if (input == 1) {
    return [min[1], [1]];
  }
  let factors = [1, 2, 3];
  for(let j = 2; j <= input; j++){
    //   console.log(j, "j");
    min[j] = Number.POSITIVE_INFINITY;
    for (let i = 0; i < factors.length; i++) {
      if (j >= factors[i]) {
        if (i == 0) {
            let d = j-factors[0];
            // console.log(d,min[d], "add 1");
            let minNum = min[d] + 1;
            if(minNum < min[j]){
                min[j] = minNum;
                prev[j] = j -1;
            // console.log(min[j], "added");
                // flow.push(j);
            }
        } else {
            let d = Math.floor(j/factors[i]);
            let r = j%factors[i];
            // console.log(d, r,factors[i], "multipied");
            let minNum = min[d] + 1 + r;
            if(minNum < min[j]){
              min[j] = minNum;
            // console.log(factors[i], "multiplied");
            if(r == 0){
                prev[j] = d;
            }
            // flow.push(j);
            }
        }
      }
    }
    // console.log(j, prev[j], min[j], "j, prev, min");
  }
  let flow = [];
  flow[min[input]] = input;
  
  for(let i = min[input]-1; i >= 0; i--){
      flow[i] = prev[flow[i+1]];
  }
//   console.log(min.slice(1, min.length), "min array");
//   console.log(prev.slice(2, min.length), "prev array");
//   console.log(min[input]);

  return [min[input], flow];
}
