const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let numbers = line.toString().split("");
//   let numbers = line.toString().split(" ").map(Number);

//   console.log(numbers);
  console.log(arithmetic(numbers));
  rl.close();
});

function arithmetic(a){
    // console.log(a, "input");
    // console.log(operator(Number(a[0]),Number(a[2]), a[1]));
    let min = [];
    let max = [];
    for(let i = 0; i < a.length; i=i+2){
        min[i] = [];
        max[i] = [];
        min[i][i] = Number(a[i]);
        max[i][i] = Number(a[i]);
    }
    // for(let i = 0; i < a.length-2; i=i+2){
    //     console.log(operator(Number(a[i]), Number(a[i+2]), a[i+1]));
    // }
    for(let s = 2; s < a.length; s=s+2){
        // console.log(s, "s");
        for(let i = 0; i < a.length-s; i=i+2){
            j = i+s;
            // console.log(i,j, "i and j");
            // console.log(operator(Number(a[i]), Number(a[j]), a[i+1]));
            if(j-i == 2){
                min[i][j] = operator(Number(a[i]), Number(a[j]), a[i+1]);
                max[i][j] = operator(Number(a[i]), Number(a[j]), a[i+1]);
            } else {
                min[i][j] = Number.POSITIVE_INFINITY;
                max[i][j] = Number.NEGATIVE_INFINITY;
                for(let b = i; b <= j-2; b=b+2){
                    // console.log(b, "b");
                    let num1 = operator(min[i][b], min[b+2][j], a[b+1]);
                    let num2 = operator(max[i][b], max[b+2][j], a[b+1]);
                    // console.log(num1, "num1");
                    // console.log(num2, "num2");
                    if(num1 < min[i][j]){
                        min[i][j] = num1;
                    }
                    if(num2 < min[i][j]){
                        min[i][j] = num2;
                    }
                    if(num1 > max[i][j]){
                        max[i][j] = num1;
                    }
                    if(num2 > max[i][j]){
                        max[i][j] = num2;
                    }
                    // console.log(min[i][j], max[i][j], "min and max after");
                }
            }
        }
    }
    // console.log(min, "min");
    // console.log(max, "max");
    return max[0][a.length-1];
}

function operator(a, b, c){
    // console.log(a, c, b, "operator inputs");
    if(c == "+"){
        return a+b;
    } else if(c == "-"){
        return a-b;
    } else if(c == "*"){
        return a*b;
    } 
}
