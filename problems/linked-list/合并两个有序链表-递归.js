function mergeTwoLists(l1, l2) {
  if (null === l1) return l2; // 基本情况，返回头节点
  if (null === l2) return l1; // 基本情况，返回头节点

  if (l1.val <= l2.val) {
    // 决定使用哪个递推公式
    let mergeResult = mergeTwoLists(l1.next, l2); // 寻找基本情况
    l1.next = mergeResult; // 使用递归函数的返回值与当前参数进行计算，该处计算为链表链接指向
    return l1; // 返回计算后的头节点
  } else {
    let mergeResult = mergeTwoLists(l1, l2.next); // 寻找基本情况
    l2.next = mergeResult; // 使用递归函数的返回值与当前参数进行计算，该处计算为链表链接指向
    return l2; // 返回计算后的头节点
  }
}
