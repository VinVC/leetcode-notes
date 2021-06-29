/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
 

链接：https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const stack = [],
    preOrderNodeList = [];
  if (root) stack.push(root);
  // 每一次循环开始，总是pop出上个循环刚刚push进去的元素，所以循环的末尾要先push right 再 push left
  while (stack.length) {
    let cur = stack.pop();
    preOrderNodeList.push(cur);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  for (let i = 0; i < preOrderNodeList.length; i++) {
    preOrderNodeList[i].right = preOrderNodeList[i + 1] ? preOrderNodeList[i + 1] : null;
    preOrderNodeList[i].left = null;
  }
};
