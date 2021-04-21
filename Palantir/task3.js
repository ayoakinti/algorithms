let companyDomains = ["photos1blogger.com"];

let newDomains = [
  "hpotos1blogger.com",
  "phtoosiblogger.com",
  "photoslblgoger.com",
  "photos|bloggre.com",
  "photos!blogge.rcom",
  "phoots1bloggre.com",
  "phoots1blogger.cmo",
];

const object = {
  1: "i",
  i: "i",
  l: "i",
  "|": "i",
  "!": "i",
  s: "s",
  5: "s",
  $: "s",
  o: "o",
  0: "o",
  a: "a",
  "@": "a",
  e: "e",
  3: "e",
};
let baseSet = new Set();

let adjascentSet = new Set();
let adjascentSet2 = new Set();


String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  var chars = this.split("");
  chars[index] = replacement;
  return chars.join("");
};

const adjascentStrings = (a) => {
  console.log(a, "ggggg");
  for (let i = 0; i < a.length; i++) {
    if (i == a.length - 1) {
      let initial = a[i];
      let final = ".";
      let newString = a.replaceAt(i, final);
      // console.log(newString, "sting", initial, final)
      newString = newString + initial;
      // console.log(newString, "after strinf", initial, final)
      adjascentSet.add(newString);
      adjascentSet2.add(convertToBase(newString));
    } else {
      let initial = a[i];
      let final = a[i + 1];
      let newString = a.replaceAt(i, final);
      // console.log(newString, "sting", initial, final)
      newString = newString.replaceAt(i + 1, initial);
      // console.log(newString, "after strinf", initial, final)
      adjascentSet.add(newString);
      adjascentSet2.add(convertToBase(newString));
    }
  }
};

const convertToBase = (a) => {
  let newString = "";
  for (let i = 0; i < a.length; i++) {
    let cv = a[i];
    if (object[cv]) {
      newString += object[cv];
    } else {
      newString += cv;
    }
  }
  return newString;
};

// console.log(convertToBase("mit3"), "to base conve");

let companyHashmap = new Map();

const splitDomain = (domain) => {
  for (let i = 0; i < domain.length; i++) {
    let j = 0;
    while (j < domain[i].length) {
      if (domain[i][j] === ".") {
        let name = domain[i].slice(0, j);
        let host = domain[i].slice(j + 1);

        if (companyHashmap.has(name)) {
          let currentvalue = companyHashmap.get(name);
          currentvalue.add(host);
          companyHashmap.set(name, currentvalue);
        } else {
          companyHashmap.set(name, new Set().add(host));
          let basevalue = convertToBase(name);
          baseSet.add(basevalue);

          adjascentStrings(name);
        }

        break;
      }
      j++;
    }
  }
};

let companyObject = [];
let newObject = [];

splitDomain(companyDomains);

let output = [];
console.log(baseSet, "baseset");
console.log(companyHashmap, "company hashmap");

for (let i = 0; i < newDomains.length; i++) {
  let j = 0;
  while (j < newDomains[i].length) {
    if (newDomains[i][j] === ".") {
      let name = newDomains[i].slice(0, j);
      let host = newDomains[i].slice(j + 1);

       if (baseSet.has(convertToBase(name))) {
        output.push(name + "." + host);
      } else if (adjascentSet.has(name)) {
        output.push(name + "." + host);
      } else if (adjascentSet.has(name + "." + host[0])) {
        output.push(name + "." + host);
      }
      else if (adjascentSet2.has(convertToBase(name))) {
        output.push(name + "." + host);
      } else if (adjascentSet2.has(convertToBase(name + "." + host[0]))) {
        output.push(name + "." + host);
      } else if (companyHashmap.has(name)) {
        let currentvalue = companyHashmap.get(name);
        if (!currentvalue.has(host)) {
          output.push(name + "." + host);
        }
      } 

      break;
    }
    j++;
  }
}
console.log(adjascentSet, "adja set");
console.log(adjascentSet2, "adja set2");
console.log(output);
