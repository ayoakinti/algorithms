let companyDomains = [
  "palantir.com",
  "apple.com",
  "palantir.dir",
  "palantir.dir",
];

let newDomains = ["palantir.biz", "apple.org", "apple.com", "appleorchard.net"];

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
// splitDomain(newDomains, newObject);
// console.log(newObject);

// const compareString = (a, b) => {
//   if (a.length !== b.length) {
//     return false;
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// };

let output = [];
console.log(companyHashmap, "output");

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
      }
      break;
    }
    j++;
  }
}
console.log(output);
