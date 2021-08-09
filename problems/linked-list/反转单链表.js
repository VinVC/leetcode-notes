/**
 * 思路：
 * 遍历node:
 * next = node.next
 * node.next = pre
 * pre = node
 * node = next
 */

function reverseLinkedList(head) {
  let pre = null,
    cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
