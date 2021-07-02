/**
 * 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

编码的字符串应尽可能紧凑。

链接：https://leetcode-cn.com/problems/serialize-and-deserialize-bst
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const ans = [];
  preOrder(root, ans);
  return ans.join(",");
};
function preOrder(root, arr) {
  if (!root) {
    arr.push("#");
    return;
  }
  arr.push(root.val);
  preOrder(root.left, arr);
  preOrder(root.right, arr);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodes = data.split(",");
  return buildTree(nodes);
};

function buildTree(nodes) {
  if (!nodes.length) return null;
  let n = nodes.shift();
  if (n === "#") return null;
  let root = new TreeNode(n - 0);
  root.left = buildTree(nodes);
  root.right = buildTree(nodes);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
