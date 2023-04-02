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

  delete(value) {
    this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) return null;
    else if (node.value > value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (node.value < value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let minNode = findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }
}

const findMinNode = (node) => {
  if (node.left === null) return node;
  else return findMinNode(node.left);
};

const searchTree = (node, value) => {
  if (node === null) return -1;
  else if (node.value === value) return node;
  else if (node.value > value) return searchTree(node.left, value);
  else return searchTree(node.right, value);
};

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

tree = new BinaryTree(0);
tree.insert([3, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 2]);

// console.log(tree, "tree");
// console.log(tree.root, "tree");
// console.log(tree.root.right, "tree");
// console.log(tree.root.right.left, "tree");
// console.log(tree.root.right.left.right, "tree");
// console.log(tree.root.right.left.right.right, "tree");
// console.log(inorder(tree.root), 'inorder');
// console.log(searchTree(tree.root, 6), "search");
tree.delete(3);
console.log(inorder(tree.root), "inorder");
