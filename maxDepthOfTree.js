// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

class Node {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined; //no duplicates
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  DFSInOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    console.log(visited);
    return visited;
  }
}

const tree = new BinaryTree();
tree.insert(8);
tree.insert(9);
tree.insert(10);
tree.insert(15);
tree.insert(7);

const maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }
};

const maxDepthOpt = function (root) {
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth(tree.root));
console.log(tree.DFSInOrder());
