/**
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  return buildTree(head, null);
};

function getMidian(left, right) {
  let fast = left,
    slow = left;
  while (fast !== right && fast.next !== right) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
function buildTree(left, right) {
  if (left === right) return null;
  let mid = getMidian(left, right);
  const root = new TreeNode(mid.val);
  root.left = buildTree(left, mid);
  root.right = buildTree(mid.next, right);
  return root;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//vino
