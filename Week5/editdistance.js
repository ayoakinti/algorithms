const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const word1 = line;

  rl.on("line", (line) => {
  const word2 = line;

    console.log(distance(word1, word2));
    rl.close();
  });
});

function distance(a, b) {
    // console.log(a, b, "inputs");
    let min = [];
    min[0] = [0];
    if(a.length == 0 && b.length == 0){
        return min[0][0];
    }
    for(let i = 1; i <= a.length; i++){
        // min[0][i] = i;
        min[i] = [];
        min[i][0] = i;
    }
    for(let i = 1; i <= b.length; i++){
        min[0][i] = i;
        // min[i] = [];
        // min[i][0] = i;
    }
    // console.log(min, "min")
    // console.log(min[1][1], "min2")
    //     min[1][1] = Number.POSITIVE_INFINITY;
    // console.log(min[1][1], "min2")


    for(let i = 1; i <= a.length; i++){
        // console.log(i, "i");
        for(j = 1; j <= b.length; j++){
        min[i][j] = Number.POSITIVE_INFINITY;

        // console.log(j, "j");

            let one = min[i-1][j] + 1;
            if(one < min[i][j]){
                min[i][j] = one;
            }
            let two = min[i][j-1] + 1;
            if(two < min[i][j]){
                min[i][j] = two;
            }
            // console.log(one, "one");
            // console.log(two, "two");
            if(a[i-1] == b[j-1]){
                // console.log(i-1, j-1, "i and j minus 1")
                let three = min[i-1][j-1];
                if(three < min[i][j]){
                    min[i][j] = three;
                }
            // console.log(three, "three");

            } else {
                let three = min[i-1][j-1] + 1;
                if(three < min[i][j]){
                    min[i][j] = three;
                }
            // console.log(three, "three");

            }
        // console.log(min, "min after j");
            
        }
    }
    return min[a.length][b.length];
}

