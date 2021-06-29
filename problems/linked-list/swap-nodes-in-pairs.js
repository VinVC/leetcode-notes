/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  let pre = null,
    cur = head,
    next = head.next;
  const newHead = head.next;
  while (next) {
    let n = next.next;

    if (pre) pre.next = next;
    next.next = cur;
    cur.next = n;

    pre = cur;
    cur = n;
    next = n ? n.next : null;
  }
  return newHead;
};
