/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let stack = [],
    cur = -Number.MAX_VALUE;
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      let n = stack.pop();
      if (n.val <= cur) return false;
      root = n.right;
      cur = n.val;
    } else {
      break;
    }
  }
  return true;
};
