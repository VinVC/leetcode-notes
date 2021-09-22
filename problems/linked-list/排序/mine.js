/**
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var sortList = function (head) {
  if (!head || !head.next) return head;

  const merge = (h1, h2) => {
    const dummyHead = new ListNode();
    let cur = dummyHead;
    while (h1 && h2) {
      if (h1.val <= h2.val) {
        cur.next = h1;
        h1 = h1.next;
      } else {
        cur.next = h2;
        h2 = h2.next;
      }
      cur = cur.next;
    }
    if (h1) cur.next = h1;
    if (h2) cur.next = h2;
    return dummyHead.next;
  };

  // 求节点数
  let len = 0,
    node = head;
  while (node) {
    len++;
    node = node.next;
  }

  const dummyHead = new ListNode(0, head);
  for (let subLen = 1; subLen < len; subLen <<= 1) {
    let pre = dummyHead,
      cur = dummyHead.next;

    while (cur) {
      let head1 = cur;
      // 这个的条件应该是: i<subLen && cur.next.以保证sublen长度中无null.且如果进了循环，cur = cur.next = null
      //后面的head2 = cur.next就会报错
      for (let i = 1; i < subLen && cur.next; i++) {
        cur = cur.next;
      }
      let head2 = cur.next;
      cur.next = null;
      cur = head2;
      //这里一定要&& cur && cur.next.保证子序列中无null
      for (let i = 1; i < subLen && cur && cur.next; i++) {
        cur = cur.next;
      }
      let next = null;
      if (cur) {
        next = cur.next;
        cur.next = null;
      }
      pre.next = merge(head1, head2);
      while (pre.next) {
        pre = pre.next;
      }
      cur = next;
    }
  }
  return dummyHead.next;
};
