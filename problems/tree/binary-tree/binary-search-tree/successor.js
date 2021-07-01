/**
 * 设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

如果指定节点没有对应的“下一个”节点，则返回null。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let stack = [],
    flag = false;
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      let n = stack.pop();
      root = n.right;
      if (flag) return n;
      if (n.val === p.val) flag = true;
    } else {
      break;
    }
  }
  return null;
};
