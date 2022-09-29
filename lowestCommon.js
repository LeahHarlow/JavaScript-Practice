// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

//Example
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

const lowestCommonAncestor = function (root, nodeOne, nodeTwo) {
  let lca = root;

  while (lca) {
    // if both nodes are less than the root it means
    // that they are both on the left side of the tree.
    // Move the root to the left.
    if (nodeOne.val < lca.val && nodeTwo.val < lca.val) {
      lca = lca.left;
      continue;
    }

    // if both nodes are greater than the root it means
    // that they are both on the right side of the tree.
    // Move the root to the right.
    if (nodeOne.val > lca.val && nodeTwo.val > lca.val) {
      lca = lca.right;
      continue;
    }

    return lca;
  }

  return undefined;
};

lowestCommonAncestor()
