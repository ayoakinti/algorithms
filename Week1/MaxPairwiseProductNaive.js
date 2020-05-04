let n = [2, 3, 4, 5, 6];
let product = 0;

for (let i = 0; i < n.length; i++) {
  for (let j = i + 1; j < n.length; j++) {
    if (product < n[i] * n[j]) {
      product = n[i] * n[j];
    }
  }
}
console.log("The sum is " + product);
