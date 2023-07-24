const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = line.toString();
  console.log(checkBracket(input));
  rl.close();
});

function checkBracket(input) {
    // console.log(input, "input");
    // console.log(input.length, "input length");
    let arr = [];

    for(let i = 0; i < input.length; i++){
        let char = input[i]
        // console.log(char, "normal")
        if (char == "[" || char == "{" || char == "("){
            arr.push([char, i+1]);
        }

        if (char == "]" || char == "}" || char == ")"){
            arr.push([char, i+1]);
            if(checkArrangement(arr)){
                continue;
            } else {
                // console.log("string not balanced");
                return i+1;
            }
        }
    }
    if(arr.length == 0){
        return "Success";
    } else {
        return arr[0][1];
    }
}

function checkArrangement(arr) {
    if(arr.length < 2){
        // console.log("length no reach");
        return false;
    }
    let length = arr.length;
    let lastchar = arr[length-1][0];
    let precedingchar = arr[length-2][0];
    if(precedingchar == "[" && lastchar == "]" || precedingchar == "{" && lastchar == "}" || precedingchar == "(" && lastchar == ")"){
        // console.log(precedingchar, lastchar, "preceding and last");
        // console.log(arr, "before check");
        arr.splice(arr.length-2, 2);
        // console.log(arr, "after check");
        return true;
    } else {
        // console.log(precedingchar, lastchar, "preceding and last not balanced");
        return false;
    }
}
