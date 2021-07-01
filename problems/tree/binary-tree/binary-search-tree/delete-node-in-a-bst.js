/**
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。
说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

链接：https://leetcode-cn.com/problems/delete-node-in-a-bst
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !root.right) {
      root = null;
    } else if (root.right) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    } else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }
  return root;
};

function successor(root) {
  root = root.right;
  while (root.left) root = root.left;
  return root.val;
}

function predecessor(root) {
  root = root.left;
  while (root.right) root = root.right;
  return root.val;
}

//vino
