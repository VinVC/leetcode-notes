/**
 * 
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum-ii
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const ans = [],
    path = [];

  const dfs = (node, targetSum) => {
    if (!node) return;
    path.push(node.val);
    targetSum -= node.val;
    if (!node.left && !node.right && targetSum === 0) {
      ans.push([...path]);
    }
    dfs(node.left, targetSum);
    dfs(node.right, targetSum);
    path.pop();
  };

  dfs(root, targetSum);
  return ans;
};
