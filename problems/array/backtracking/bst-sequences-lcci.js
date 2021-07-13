/**
 * 从左向右遍历一个数组，通过不断将其中的元素插入树中可以逐步地生成一棵二叉搜索树。给定一个由不同节点组成的二叉搜索树，输出所有可能生成此树的数组。
 * 
 * 示例：
给定如下二叉树

        2
       / \
      1   3
返回：

[
   [2,1,3],
   [2,3,1]
]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var BSTSequences = function (root) {
  if (!root) return [[]];
  const ans = [];
  dfs(ans, [root], []);
  return ans;
};

function dfs(ans, dq, path) {
  if (!dq.length) {
    ans.push([...path]);
    return;
  }
  let size = dq.length;
  for (let i = 0; i < size; i++) {
    let node = dq.shift();
    path.push(node.val);

    if (node.left) dq.push(node.left);
    if (node.right) dq.push(node.right);

    dfs(ans, dq, path);

    if (node.right) dq.pop();
    if (node.left) dq.pop();

    dq.push(node);

    path.pop();
  }
}
