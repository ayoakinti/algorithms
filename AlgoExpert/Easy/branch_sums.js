// Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum). A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. Each Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value.

// # Add, edit, or remove tests in this file.
// # Treat it as your playground!

// import program
// import unittest

// class TestProgram(unittest.TestCase):
//     def test_case_1(self):
//         tree = BinaryTree(1)
//         self.assertEqual(program.branchSums(tree), [1])

//     def test_case_2(self):
//         tree = BinaryTree(1).insert([2])
//         self.assertEqual(program.branchSums(tree), [3])

//     def test_case_3(self):
//         tree = BinaryTree(1).insert([2, 3])
//         self.assertEqual(program.branchSums(tree), [3, 4])

//     def test_case_4(self):
//         tree = BinaryTree(1).insert([2, 3, 4, 5])
//         self.assertEqual(program.branchSums(tree), [7, 8, 4])

//     def test_case_5(self):
//         tree = BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10])
//         self.assertEqual(program.branchSums(tree), [15, 16, 18, 10, 11])

//     def test_case_6(self):
//         tree = BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1])
//         self.assertEqual(program.branchSums(tree), [15, 16, 18, 9, 11, 11, 11])

//     def test_case_7(self):
//         tree = BinaryTree(0)
//         tree.left = BinaryTree(1)
//         tree.left.left = BinaryTree(10)
//         tree.left.left.left = BinaryTree(100)
//         self.assertEqual(program.branchSums(tree), [111])

//     def test_case_8(self):
//         tree = BinaryTree(0)
//         tree.right = BinaryTree(1)
//         tree.right.right = BinaryTree(10)
//         tree.right.right.right = BinaryTree(100)
//         self.assertEqual(program.branchSums(tree), [111])

//     def test_case_9(self):
//         tree = BinaryTree(0)
//         tree.left = BinaryTree(9)
//         tree.right = BinaryTree(1)
//         tree.right.left = BinaryTree(15)
//         tree.right.right = BinaryTree(10)
//         tree.right.right.left = BinaryTree(100)
//         tree.right.right.right = BinaryTree(200)
//         self.assertEqual(program.branchSums(tree), [9, 16, 111, 211])

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(values) {
    for (let i = 0; i < values.length; i++) {
      let newNode = new Node(values[i]);

      if (this.root === null) this.root = newNode;
      else this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}

const BranchSums = (root) => {
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
};

const calculateBranchSums = (root, runningSum, sums) => {
  if (root === null) return;

  let newRunningSum = root.value + runningSum;
  if (root.left === null && root.right === null) {
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSums(root.left, newRunningSum, sums);
  calculateBranchSums(root.right, newRunningSum, sums);
};


tree = new BinaryTree(1);
tree.insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1])

console.log(BranchSums(tree.root))
