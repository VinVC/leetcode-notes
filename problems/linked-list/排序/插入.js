/**
 * https://leetcode-cn.com/problems/insertion-sort-list/
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
var insertionSortList = function (head) {
  if (!head || !head.next) return head;
  let cur = head.next;
  head.next = null;
  while (cur) {
    let next = cur.next;
    let start = head,
      pre = null;
    while (start && start.val < cur.val) {
      pre = start;
      start = start.next;
    }
    if (pre) {
      pre.next = cur;
      cur.next = start;
    } else {
      cur.next = start;
      head = cur;
    }
    cur = next;
  }
  return head;
};
