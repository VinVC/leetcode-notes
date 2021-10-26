/**
 * 
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// ! 如果有两个中间结点，则返回第二个中间结点。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    // fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

// ! 如果有两个中间结点，则返回第一个中间结点。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode1 = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
