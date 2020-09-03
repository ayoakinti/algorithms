const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", () => {

  rl.on("line", (line) => {
  const number1 = line.toString().split(" ").map(Number);

  rl.on("line", () => {

    rl.on("line", (line) => {
  const number2 = line.toString().split(" ").map(Number);
      
          console.log(subsequence(number1, number2));
          rl.close();
        });
    });
  });
});

function subsequence(a, b) {
    // console.log(a, b, "inputs");
    let max = [];
    max[0] = [0];
    // console.log(a.length, b.length);
    if(a.length == 0 && b.length == 0){
        return max[0][0];
    }
    for(let i = 1; i <= a.length; i++){
        // max[0][i] = i;
        max[i] = [];
        max[i][0] = 0;
    }
    for(let i = 1; i <= b.length; i++){
        max[0][i] = 0;
        // max[i] = [];
        // max[i][0] = i;
    }
    for(let i = 1; i <= a.length; i++){
        // console.log(i, "i");
        for(j = 1; j <= b.length; j++){

        // console.log(j, "j");
            if(a[i-1] == b[j-1]){
                // console.log(i-1, j-1, "i and j minus 1")
                    max[i][j] = max[i-1][j-1] + 1;
                
            // console.log(three, "three");

            } else {
                max[i][j] = max[i][j-1];
                let three = max[i-1][j];
                if(three > max[i][j]){
                    max[i][j] = three;
                }
            // console.log(three, "three");

            }
        // console.log(max, "max after j");
            
        }
    }
    // console.log(max);
    return max[a.length][b.length];
}