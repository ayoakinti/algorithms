const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = Number(line);

  rl.once("line", (line) => {
    const m = Number(line);
    let count = 0;
    let actions = [];
    rl.on("line", (line) => {
      const action = line.toString().split(" ");
      actions.push(action);

      count++;

      if (count == m) {
        // console.log(chainHashing(actions, n));
        let result = chainHashing(actions, n);
        if (result.length) {
          for (let i = 0; i < result.length; i++) {
            //   console.log(typeof result[i])
            // let res = "";
            // let res = result[1][i][0] + " " + result[1][i][1]
            // console.log(res);
            if (typeof result[i] == "string") {
              console.log(result[i]);
              // console.log("strig!!")
            } else {
              let res = "";
              for (let j = 0; j < result[i].length; j++) {
                res += result[i][j] + " ";
              }
              console.log(res);
            }
          }
        }

        rl.close();
      }
    });
  });
});

function chainHashing(arr, n) {
//   let i = BigInt(5);
//   //   let j = BigInt(5);
//   console.log(i);
//   let sum = i ** BigInt(5);
//   console.log(sum);
//   let rem = sum % BigInt(5);
//   console.log(rem);

//   const bigInt = BigInt(Number.MAX_SAFE_INTEGER);
//   console.log(bigInt);
//   const bigN = bigInt ** BigInt(54);
//   console.log(bigN);
  //   console.log(arr, "input");
  hashArray = [];
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    let input = arr[i];
    if (input[0] == "add") {
      let hash = Hash(input[1], n);
      // console.log(hash, input[1]);
      if (!hashArray[hash]) {
        hashArray[hash] = [];
        hashArray[hash].unshift(input[1]);
      } else {
        if (!hashArray[hash].includes(input[1])) {
          hashArray[hash].unshift(input[1]);
        }
      }
    }
    if (input[0] == "check") {
      //   console.log(hashArray[Number(input[1])]);
      let item = "";
      if (hashArray[Number(input[1])]) {
        item = [...hashArray[Number(input[1])]];
      }
      output.push(item);
    }
    if (input[0] == "find") {
      let hash = Hash(input[1], n);
      // console.log(hash, input[1]);
      if (!hashArray[hash]) {
        // console.log("no")
        output.push("no");
      } else {
        // console.log(hashArray[hash]);
        if (hashArray[hash].includes(input[1])) {
          output.push("yes");
        } else {
          output.push("no");
        }
      }
    }
    if (input[0] == "del") {
      let hash = Hash(input[1], n);
      //   console.log(hash, input[1]);
      if (hashArray[hash]) {
        // console.log(hashArray[hash], "before delete");
        let index = hashArray[hash].indexOf(input[1]);
        // console.log(index, "index");
        if (index != -1) {
          // console.log(output, "before delete");
          hashArray[hash].splice(index, 1);
          // console.log(output, "after delete");
        }
        // console.log(hashArray[hash], "after delete");
      }
    }
  }
  //   console.log(hashArray);
  return output;
}

function Hash(input, n) {
  // console.log(input,n, "input at hashing");
  let total = BigInt(0);
  let p = BigInt(1000000007);
  let x = BigInt(263);
  for (let i = 0; i < input.length; i++) {
    let ascii = input[i].charCodeAt(0);
    ascii = BigInt(ascii);
    let sum = x ** BigInt(i);
    sum = ascii * sum;
    total += sum;
    // console.log(ascii * sum);

    // console.log(ascii, "ascii");
    // console.log(sum, "sum");
    // console.log(x, i);
    // console.log(ascii * Math.pow(x, i));
  }
    // console.log(total)
  let hash = total % p;
    // console.log(hash, "bigint")
  hash = Number(hash);
    // console.log(hash, "after bigint")
  hash = hash % n;
  return hash;
}
