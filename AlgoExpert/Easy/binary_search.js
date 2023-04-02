// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, otherwise -1.

// # Add, edit, or remove tests in this file.
// # Treat it as your playground!

// import program
// import unittest

// class TestProgram(unittest.TestCase):
//     def test_case_1(self):
//         self.assertEqual(program.binarySearch([1, 5, 23, 111], 111), 3)

//     def test_case_2(self):
//         self.assertEqual(program.binarySearch([1, 5, 23, 111], 5), 1)

//     def test_case_3(self):
//         self.assertEqual(program.binarySearch([1, 5, 23, 111], 35), -1)

//     def test_case_4(self):
//         self.assertEqual(
//             program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33), 3
//         )

//     def test_case_5(self):
//         self.assertEqual(
//             program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72), 8
//         )

//     def test_case_6(self):
//         self.assertEqual(
//             program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73), 9
//         )

//     def test_case_7(self):
//         self.assertEqual(
//             program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70), -1
//         )

//     def test_case_8(self):
//         self.assertEqual(
//             program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355), 10
//         )

//     def test_case_9(self):
//         self.assertEqual(
//             program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354), -1
//         )

// if __name__ == "__main__":
//     unittest.main()

// Recursive Solution
// 0(log(n)) time and 0(log(n)) space
const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1);
};

const binarySearchHelper = (array, target, left, right) => {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  let possibleSolution = array[middle];
  if (target === possibleSolution) {
    return middle;
  } else if (target < possibleSolution) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
};

// Iterative Solution
// 0(log(n)) time and 0(1) space
const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1);
};

const binarySearchHelper = (array, target, left, right) => {
  while (left > right) {
    let middle = Math.floor((left + right) / 2);
    let possibleSolution = array[middle];
    if (target === possibleSolution) {
      return middle;
    } else if (target < possibleSolution) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
