const endOfFirstHalf = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

//1->2->3->4->5  3
//1->2->3->4     2
