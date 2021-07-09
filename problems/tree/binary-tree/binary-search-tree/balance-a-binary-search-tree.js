/**
 * 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

如果有多种构造方法，请你返回任意一种。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balance-a-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const list = [];
  inorder(root, list);
  return buildSubTree(list, 0, list.length - 1);
};

function buildSubTree(list, left, right) {
  if (left > right) return null;
  let mid = left + ((right - left) >> 1);
  let root = new TreeNode(list[mid]);
  root.left = buildSubTree(list, left, mid - 1);
  root.right = buildSubTree(list, mid + 1, right);
  return root;
}

function inorder(root, res = []) {
  if (!root) return;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// vino
