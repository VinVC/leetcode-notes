```JS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 中序遍历就是根节点在中间：左中右，也就是inorder
 */
var inorderTraversal = function (root) {
  const stack = [],
    ans = [];
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      root = stack.pop();
      ans.push(root.val);
      root = root.right;
    } else {
      break;
    }
  }
  return ans
};

```
