/**
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let th = 0;
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      let n = stack.pop();
      if (++th === k) return n.val;
      root = n.right;
    } else {
      break;
    }
  }
};

/**
 * 第k大
 * 右 -> 中 -> 左
 */
function kthLargest(root, k) {
  const stack = [];
  while (true) {
    if (root) {
      stack.push(root);
      root = root.right;
    } else if (stack.length) {
      let n = stack.pop();
      if (--k === 0) return n.val;
      root = n.left;
    } else {
      break;
    }
  }
}
