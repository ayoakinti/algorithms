const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const pattern = line;

  rl.once("line", (line) => {
    const text = line;

    console.log(findPattern(pattern, text));
    // let result = findPattern(pattern, text);
    // if (result.length) {
    //   let res = "";
    //   for (let i = 0; i < result.length-1; i++) {
    //     //   console.log(typeof result[i])
    //     res += result[i] + " ";
    //     // console.log(result[i]);
    //     // console.log("strig!!")
    //   }
    //   res += result[result.length-1];
    //   console.log(res);
    // //   console.log(res.length);
    // }
    rl.close();
  });
});

function findPattern(pattern, text) {
  //   console.log(pattern, text, "inputs");
  let output = "";
  let Hashes = [];
  PrecomputeHashes(text, pattern, Hashes);
  let pLength = pattern.length;
  let tLength = text.length;
  let range = tLength - pLength + 1;
  // console.log(range);
  let pHash = Hash(pattern);
  //   console.log(pHash);
  // console.log(Hashes);
  for (let i = 0; i < range; i++) {
    //   console.log(pattern, "pattern")
    // console.log(Hash(substring));
    if (Hashes[i] == pHash) {
      let substring = text.substring(i, i + pLength);
      // console.log(substring, "substring");
      //   console.log(i, "equal!!!")
      // output+= i + " ";
      if (isEqual(pattern, substring)) {
        output += i + " ";
      }
      //   output.push(i);
    }
    // console.log(Hash(substring));
    // if (Hash(substring) == pHash) {
    //     //   console.log(i, "equal!!!")
    //     if (isEqual(pattern, substring)) {
    //       output+= i + " ";
    //     }
    //   //   output.push(i);
    //   }
  }
  return output;
}

function Hash(input) {
  // console.log(input,n, "input at hashing");
  let total = BigInt(0);
  let p = BigInt(1000000000007);
  let x = BigInt(1);
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

function PrecomputeHashes(text, pattern, Hashes) {
  // console.log(text, pattern, Hashes, "inputs");
  let pLength = pattern.length;
  let tLength = text.length;
  let range = tLength - pLength + 1;
  // console.log(range);

  let p = BigInt(1000000000007);
  let x = 1;

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
    if (total < 0) {
      total += Number(p);
      total = total % Number(p);
    }
    let hash = total % Number(p);

    // console.log(hash, "hash");
    Hashes[i] = hash;
  }
  //   console.log(Hashes);
  return Hashes;
}

function isEqual(a, b) {
  if (a.length != b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  return true;
}
