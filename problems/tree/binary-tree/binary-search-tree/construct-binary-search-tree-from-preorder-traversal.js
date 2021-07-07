/**
 * 返回与给定前序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点。

(回想一下，二叉搜索树是二叉树的一种，其每个节点都满足以下规则，对于 node.left 的任何后代，值总 < node.val，而 node.right 的任何后代，值总 > node.val。此外，前序遍历首先显示节点 node 的值，然后遍历 node.left，接着遍历 node.right。）
https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/
题目保证，对于给定的测试用例，总能找到满足要求的二叉搜索树。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 输入：[8,5,1,7,10,12]
输出：[8,5,10,1,7,null,12]
 */

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
let index = 0,
  len,
  arr;
var bstFromPreorder = function (preorder) {
  index = 0;
  len = preorder.length;
  arr = preorder;
  return dfs(Number.MIN_VALUE, Number.MAX_VALUE);
};

function dfs(low, high) {
  if (index === len) return null;
  let cur = arr[index];
  if (cur < low || cur > high) return null;
  index++;
  let root = new TreeNode(cur);
  root.left = dfs(low, cur);
  root.right = dfs(cur, high);
  return root;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// vino
