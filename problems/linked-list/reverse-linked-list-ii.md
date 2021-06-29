## 步骤

1. 获取 left 的 pre node
2. 获取 right node
3. 1)获取子链表，2)并切断连接
   1. leftNode = preNode.next
   2. pre.next = null; rightNode.next = null
4. 反转子链表
5. 将子链表和父链表连接起来
   1. preNode.next = rightNode
   2. leftNode.next = rightNode.next

## 心得

### 如何处理 head 可能变化的情况?

创建一个 dummyNode = new ListNode(-1)  
dummyNode.next = head

这样即使 head 发生变化，head 地址里的东西随便变，不影响 dummyNode.next 获取链表头节点

### 如何到达链表的第 n 个节点

`依然是使用dummyNode的方式`

```js
dummyNode.next = head;
let node = dummyNode;
for (let i = 0; i < n; i++) {
  node = node.next;
}
```
