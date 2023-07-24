const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const n = Number(line);
  let count = 0;
  let actions = [];

  rl.on("line", (line) => {
    const action = line.toString().split(" ");
    actions.push(action);

    count++;

    if (count == n) {
      //   console.log(phoneBook(actions));
      let result = phoneBook(actions);
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

function phoneBook(arr) {
  // console.log(arr, "input");
  let phonebook = [];
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let input = arr[i];
    if (input[0] == "add") {
      phonebook[Number(input[1])] = input[2];
    }
    if (input[0] == "del") {
      phonebook[Number(input[1])] = null;
    }
    if (input[0] == "find") {
      if (phonebook[Number(input[1])]) {
        output.push(phonebook[Number(input[1])]);
      } else {
        output.push("not found");
      }
    }
  }
  return output;
}
