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
  if (!root) return [];
  const ans = [];
  const { preList, index } = preorder(root);
  let l1 = preList.slice(1, index + 1);
  let l2 = preList.slice(index + 1);
  let len = preList.length - 1;
  dfs(ans, len, l1, l2, 0, 0, []);
  return ans.map(arr => [preList[0], ...arr]);
};

function preorder(root) {
  let index,
    preList = [];

  const recursion = node => {
    if (!node) return;
    preList.push(node.val);
    recursion(node.left);
    if (node === root) index = preList.length - 1;
    recursion(node.right);
  };

  recursion(root);

  return { preList, index };
}

function dfs(ans, len, l1, l2, index1, index2, curList) {
  if (curList.length === len) {
    ans.push([...curList]);
    return;
  }
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      if (index1 >= l1.length) continue;
      curList.push(l1[index1]);
      dfs(ans, len, l1, l2, index1 + 1, index2, curList);
      curList.pop();
    }
    if (i === 1) {
      if (index2 >= l2.length) continue;
      curList.push(l2[index2]);
      dfs(ans, len, l1, l2, index1, index2 + 1, curList);
      curList.pop();
    }
  }
}
