function maxProduct(numbers) {
//   const arr = numbers.toString().split(" ");

  product = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] > product) {
        product = numbers[i] * numbers[j];
      }
    }
  }

  return product;
}

// function maxProductFast(numbers) {
// //   const arr = numbers.toString().split(" ");

//   const maxNumber1 = Math.max(...numbers);
//   const index = numbers.indexOf(maxNumber1);
//   numbers.splice(index, 1);
//   const maxNumber2 = Math.max(...numbers);
// //   console.log(maxNumber1, "max1");
// //   console.log(maxNumber2, "max2");
//   const maxProduct = maxNumber1 * maxNumber2;

//   return maxProduct;
// }
function maxProductFast(arr) {

  let MaxNumber = 0;
  let NextMaxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > MaxNumber) {
      NextMaxNumber = MaxNumber;
      MaxNumber = arr[i];
    } else if (arr[i] > NextMaxNumber) {
      NextMaxNumber = arr[i];
    } else {
      continue;
    }
  }

  const maxProduct = MaxNumber * NextMaxNumber;

  return maxProduct;
}

while (true) {
  const n = Math.ceil(Math.random() * 1000) + 1;
  console.log(n);
  var arr = [];
  //   console.log("\n");
  for (let i = 0; i < n; i++) {
    arr.push(Math.ceil(Math.random() * 100000));
  }
  console.log(...arr);
  const res1 = maxProduct(arr);
  const res2 = maxProductFast(arr);
  if (res1 !== res2){
      console.log(`Wrong answer: ${res1} - ${res2}`);
      break;
  } else {
      console.log("OK!");
  }

}
