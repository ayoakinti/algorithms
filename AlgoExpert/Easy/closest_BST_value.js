// You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.

// # Add, edit, or remove tests in this file.
// # Treat it as your playground!

// import program
// import unittest

// class BST:
//     def __init__(self, value):
//         self.value = value
//         self.left = None
//         self.right = None

//     def insert(self, value):
//         if value < self.value:
//             if self.left is None:
//                 self.left = BST(value)
//             else:
//                 self.left.insert(value)
//         else:
//             if self.right is None:
//                 self.right = BST(value)
//             else:
//                 self.right.insert(value)
//         return self

// test = (
//     BST(100)
//     .insert(5)
//     .insert(15)
//     .insert(5)
//     .insert(2)
//     .insert(1)
//     .insert(22)
//     .insert(1)
//     .insert(1)
//     .insert(3)
//     .insert(1)
//     .insert(1)
//     .insert(502)
//     .insert(55000)
//     .insert(204)
//     .insert(205)
//     .insert(207)
//     .insert(206)
//     .insert(208)
//     .insert(203)
//     .insert(-51)
//     .insert(-403)
//     .insert(1001)
//     .insert(57)
//     .insert(60)
//     .insert(4500)
// )

// class TestProgram(unittest.TestCase):
//     def test_case_1(self):
//         self.assertEqual(program.findClosestValueInBst(test, 100), 100)

//     def test_case_2(self):
//         self.assertEqual(program.findClosestValueInBst(test, 208), 208)

//     def test_case_3(self):
//         self.assertEqual(program.findClosestValueInBst(test, 4500), 4500)

//     def test_case_4(self):
//         self.assertEqual(program.findClosestValueInBst(test, 4501), 4500)

//     def test_case_5(self):
//         self.assertEqual(program.findClosestValueInBst(test, -70), -51)

//     def test_case_6(self):
//         self.assertEqual(program.findClosestValueInBst(test, 2000), 1001)

//     def test_case_7(self):
//         self.assertEqual(program.findClosestValueInBst(test, 6), 5)

//     def test_case_8(self):
//         self.assertEqual(program.findClosestValueInBst(test, 30000), 55000)

//     def test_case_9(self):
//         self.assertEqual(program.findClosestValueInBst(test, -1), 1)

//     def test_case_10(self):
//         self.assertEqual(program.findClosestValueInBst(test, 29751), 55000)

//     def test_case_11(self):
//         self.assertEqual(program.findClosestValueInBst(test, 29749), 4500)

// if __name__ == "__main__":
//     unittest.main()

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

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
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

const inorder = (node) => {
  let output = [];
  inorderTraversal(node, output);
  return output;
};

const inorderTraversal = (node, output) => {
  // console.log(node, 'inorder node')
  if (node === null) return;
  inorderTraversal(node.left, output);
  output.push(node.value);
  inorderTraversal(node.right, output);
};

const tree = new BinaryTree(10);
tree.insert(5);
tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(15);
tree.insert(13);
tree.insert(22);
tree.insert(14);

// const tree = new BinaryTree(100);
// tree.insert(5);
// tree.insert(15);
// tree.insert(5);
// tree.insert(2);
// tree.insert(1);
// tree.insert(22);
// tree.insert(1);
// tree.insert(1);
// tree.insert(3);
// tree.insert(1);
// tree.insert(1);
// tree.insert(502);
// tree.insert(55000);
// tree.insert(204);
// tree.insert(205);
// tree.insert(207);
// tree.insert(206);
// tree.insert(208);
// tree.insert(203);
// tree.insert(-51);
// tree.insert(-403);
// tree.insert(1001);
// tree.insert(57);
// tree.insert(60);
// tree.insert(4500);

// console.log(tree, "tree");
// console.log(inorder(tree.root), "tree inorder");

// Recursive call

// const closestValue = (node, value) => {
//   let closestNumber = Number.POSITIVE_INFINITY;
//   return closestValueHelper(node, value, closestNumber);
// };

// const closestValueHelper = (node, value, closestNumber) => {
//   if (node === null) return closestNumber;
//   if (Math.abs(value - closestNumber) > Math.abs(value - node.value))
//     closestNumber = node.value;
//   if (value < node.value)
//     return closestValueHelper(node.left, value, closestNumber);
//   else if (value > node.value)
//     return closestValueHelper(node.right, value, closestNumber);
//   else return closestNumber;
// };

// Iterative call

const closestValue = (node, value) => {
  let closestNumber = Number.POSITIVE_INFINITY;
  return closestValueHelper(node, value, closestNumber);
};

const closestValueHelper = (node, value, closestNumber) => {
  while (node !== null) {
    if (Math.abs(value - closestNumber) > Math.abs(value - node.value))
      closestNumber = node.value;
    if (value < node.value) node = node.left;
    else if (value > node.value) node = node.right;
    else break;
  }

  return closestNumber;
};

console.log(closestValue(tree.root, 12), 'closest value');
