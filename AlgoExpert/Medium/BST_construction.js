// Write a Binary Search Tree (BST) class. The class should have a "value" property set to be an integer, as well as "left" and "right" properties, both of which should point to either the None (null) value or to another BST. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. The BST class should support insertion, searching, and removal of values. The removal method should only remove the first instance of the target value.

// # Add, edit, or remove tests in this file.
// # Treat it as your playground!

// import program
// import unittest

// test1 = program.BST(10).insert(5).insert(15).insert(5).insert(2).insert(14).insert(22)

// test2 = program.BST(10).insert(15).insert(11).insert(22).remove(10)

// test3 = program.BST(10).insert(5).insert(7).insert(2).remove(10)

// test4 = (
//     program.BST(10)
//     .insert(5)
//     .insert(15)
//     .insert(22)
//     .insert(17)
//     .insert(34)
//     .insert(7)
//     .insert(2)
//     .insert(5)
//     .insert(1)
//     .insert(35)
//     .insert(27)
//     .insert(16)
//     .insert(30)
//     .remove(22)
//     .remove(17)
// )

// def inOrderTraverse(tree, array):
//     if tree is not None:
//         inOrderTraverse(tree.left, array)
//         array.append(tree.value)
//         inOrderTraverse(tree.right, array)
//     return array

// class TestProgram(unittest.TestCase):
//     def test_case_1(self):
//         self.assertEqual(test1.left.value, 5)

//     def test_case_2(self):
//         self.assertEqual(test1.right.right.value, 22)

//     def test_case_3(self):
//         self.assertEqual(test1.right.left.value, 14)

//     def test_case_4(self):
//         self.assertEqual(test1.left.right.value, 5)

//     def test_case_5(self):
//         self.assertEqual(test1.left.left.value, 2)

//     def test_case_6(self):
//         self.assertEqual(test1.left.left.left, None)

//     def test_case_7(self):
//         self.assertEqual(test1.right.left.right, None)

//     def test_case_8(self):
//         self.assertEqual(test1.contains(15), True)

//     def test_case_9(self):
//         self.assertEqual(test1.contains(2), True)

//     def test_case_10(self):
//         self.assertEqual(test1.contains(5), True)

//     def test_case_11(self):
//         self.assertEqual(test1.contains(10), True)

//     def test_case_12(self):
//         self.assertEqual(test1.contains(22), True)

//     def test_case_13(self):
//         self.assertEqual(test1.contains(23), False)

//     def test_case_14(self):
//         self.assertEqual(inOrderTraverse(test2, []), [11, 15, 22])

//     def test_case_15(self):
//         self.assertEqual(inOrderTraverse(test3, []), [2, 5, 7])

//     def test_case_16(self):
//         self.assertEqual(
//             inOrderTraverse(test4, []), [1, 2, 5, 5, 7, 10, 15, 16, 27, 30, 34, 35]
//         )

//     def test_case_17(self):
//         self.assertEqual(test4.right.right.value, 27)

//     def test_case_18(self):
//         self.assertEqual(test4.right.right.left.value, 16)

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
}

class Person {
  constructor (name) {
    this.name = name
  }

  talk () {
    console.log(`${this.name} says hi`)
  }
}

const Greg = new Person('Greg')
Greg.talk()
