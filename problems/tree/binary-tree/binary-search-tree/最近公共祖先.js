/**https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 *
 * 寻找最近公共祖先的思路：
 *
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null
  if (root === p || root === q) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left && right) {
    return root
  } else if (left) {
    return left
  } else if (right) {
    return right
  } else {
    return null
  }
}
