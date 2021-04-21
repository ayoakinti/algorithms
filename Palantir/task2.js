let companyDomains = ["pa!antlr.com", "nic.ci"];

let newDomains = [
  "pa!antir.com",
  "nic.cl",
  "palantirtechnologies.com",
  "nlc.biz",
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

      if (companyHashmap.has(name)) {
        let currentvalue = companyHashmap.get(name);
        if (!currentvalue.has(host)) {
          output.push(name + "." + host);
        }
      } else if (baseSet.has(convertToBase(name))) {
        output.push(name + "." + host);
      }

      break;
    }
    j++;
  }
}
console.log(output);
