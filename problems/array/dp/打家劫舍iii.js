/**
 * 337. 打家劫舍 III
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。
除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 
如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

示例 1:

输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
示例 2:

输入: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

输出: 9
解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 思路：最优子结构
 *          选： node.left与node.right不可选
 * cur node
 *         不选：node.left与node.right可选也可不选，已经每个子节点的状态
 */
var rob = function (root) {
  const y = new Map(),
    n = new Map();

  const dfs = node => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    y.set(node, (n.get(node.left) || 0) + (n.get(node.right) || 0) + node.val);
    n.set(node, Math.max(y.get(node.left) || 0, n.get(node.left) || 0) + Math.max(y.get(node.right) || 0, n.get(node.right) || 0));
  };

  dfs(root);

  return Math.max(y.get(root), n.get(root));
};

// vino im
