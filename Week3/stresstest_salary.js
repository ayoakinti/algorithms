function sortSlow(a, b) {
    let res1 = a+b;
    let res2 = b+a;
    if(Number(res1) >= Number(res2)){
        return true;
    } else {
        return false;
    }
}

function sort(a, b) {
    // console.log(a, b, "inputs");
    let n;
    if(a.length >= b.length){
        n = a.length;
    } else {
        n = b.length;
    }
    // console.log(n, "n");
    for(let i = 0; i < n; i++){
        // console.log(i, "i");
        if(Number(a[i]) > Number(b[i])){
            return true;
        } else if(Number(a[i]) < Number(b[i])) {
            return false;
        }
        if(!a[i]){
            // console.log("no digit for a");
            if(Number(a[0]) > Number(b[i])){
                return true;
            } else if(Number(a[0]) < Number(b[i])) {
                return false;
            } else {
                if(Number(a[1]) > Number(b[i])){
                    return true;
                } else if(Number(a[1]) < Number(b[i])) {
                    return false;
                } 
            }
        }
        if(!b[i]){
            // console.log("no digit for b");
            if(Number(a[i]) > Number(b[0])){
                return true;
            } else if(Number(a[i]) < Number(b[0])) {
                return false;
            } else {
                if(Number(a[i]) > Number(b[1])){
                    return true;
                } else if(Number(a[i]) < Number(b[1])) {
                    return false;
                } 
            }
        }
    }
    return true;
}

// let input = ["234", "234"];
// console.log(sort(input[0], input[1]));
// console.log(sortSlow(input[0], input[1]));

while (true) {
    
      let a = Math.ceil(Math.random() * 1000);
      let b = Math.ceil(Math.random() * 1000);
      
      a = a.toString();
      b = b.toString();
      let res1 = sort(a, b);
      let res2 = sortSlow(a, b);
      console.log(a, "a");
      console.log(b, "b");

      if (res1 != res2) {
        console.log(`Different`);
        console.log(`${res1}`);
        console.log(`${res2}`);
        break;
      } else {
        console.log("Same");
      }
  }