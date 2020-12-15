// function PrecomputeHashes(text, pattern, Hashes) {
//   // console.log(text, pattern, Hashes, "inputs");
//   let pLength = pattern.length;
//   let tLength = text.length;
//   let range = tLength - pLength + 1;
//   // console.log(range);

//   let p = BigInt(1000000007);
//   let x = BigInt(263);

//   let lastSubstring = text.substring(range - 1, tLength);
//   let lastHash = Hash(lastSubstring);
//   //   console.log(lastSubstring);

//   lastHash = BigInt(lastHash);
//   Hashes[range - 1] = lastHash;
//   //   console.log(Hashes);

//   let y = x ** BigInt(pLength);
//   y = y % p;
//   //   console.log(y, "y");

//   for (let i = range - 2; i >= 0; i--) {
//     let substring = text.substring(i, i + pLength);
//     // console.log(substring);
//     let initialAscii = substring[0].charCodeAt(0);
//     initialAscii = BigInt(initialAscii);
//     // console.log(initialAscii, "ascii");
//     // console.log(text[i+pLength], "old last characher")
//     let finalAscii = text[i + pLength].charCodeAt(0);
//     finalAscii = BigInt(finalAscii);
//     let sum1 = x * Hashes[i + 1];
//     // sum1 = sum1 % p;
//     let sum2 = finalAscii * y;
//     sum2 = sum2 % p;
//     // console.log(sum1, "sum1");
//     // console.log(sum2, "sum2");
//     let total = sum1 + initialAscii - sum2;
//     // console.log(total, i, "total");
//     hash = total % p;
//     if(hash < BigInt(0)){
//         hash = hash + p;
//         hash = hash %p;
//     }
//     // console.log(hash, "hash");
//     Hashes[i] = hash;
//   }
//   //   console.log(Hashes);
//   return Hashes;
// }

function PrecomputeHashes(text, pattern, Hashes) {
    // console.log(text, pattern, Hashes, "inputs");
    let pLength = pattern.length;
    let tLength = text.length;
    let range = tLength - pLength + 1;
    // console.log(range);
  
    let p = BigInt(1000000007);
    let x = 263;
  
    let lastSubstring = text.substring(range - 1, tLength);
    let lastHash = Hash(lastSubstring);
    //   console.log(lastSubstring);
  
  //   lastHash = BigInt(lastHash);
    Hashes[range - 1] = lastHash;
    //   console.log(Hashes);
  
    let y = BigInt(x) ** BigInt(pLength);
    y = y % p;
      // console.log(y, "y");
  
    for (let i = range - 2; i >= 0; i--) {
      // let substring = text.substring(i, i + pLength);
      // console.log(substring);
      let initialAscii = text[i].charCodeAt(0);
      // console.log(text[i]);
      // initialAscii = BigInt(initialAscii);
      // console.log(initialAscii, "ascii");
      // console.log(text[i+pLength], "old last characher")
      let finalAscii = text[i + pLength].charCodeAt(0);
      // finalAscii = BigInt(finalAscii);
      let sum1 = BigInt(x) * BigInt(Hashes[i + 1]);
      sum1 = Number(sum1 % p);
      // console.log(sum1, "sum1");
      let sum2 = BigInt(finalAscii) * y;
      sum2 = Number(sum2 % p);
      // console.log(sum2, "sum2");
      let total = sum1 + initialAscii - sum2;
      // console.log(total, i, "total");
      if(total < 0){
          total+= Number(p);
          total = total %Number(p);
      }
      let hash = total % Number(p);
      
      // console.log(hash, "hash");
      Hashes[i] = hash;
    }
    //   console.log(Hashes);
    return Hashes;
  }

function Hash(input) {
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
  }
  // console.log(total)
  let hash = total % p;
  // console.log(hash, "bigint")
  hash = Number(hash);
  // console.log(hash, "after bigint")
  //   hash = hash % n;
  return hash;
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

while (true){
    // console.log(generateString(5));

    let text = generateString(25);
    let pattern = generateString(5);
    let hashes1 = [];
    let hashes2 = [];
    
    hashes1 = PrecomputeHashes(text, pattern, hashes1);
    // console.log(hashes1);
    
    let pLength = pattern.length;
    let tLength = text.length;
    let range = tLength - pLength + 1;
    for (let i = 0; i < range; i++) {
      let substring = text.substring(i, i + pLength);
      let hash = Hash(substring);
      hash = BigInt(hash);
      hashes2.push(hash);
    }
    
    // console.log(hashes2);
    
    for(let i = 0; i < hashes1.length; i++){
        if(hashes1[i] != hashes2[i]){
            console.log(text);
            console.log(pattern);
            console.log(hashes1);
            console.log(hashes2);
            return false;
        }
    }
}
