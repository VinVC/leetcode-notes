# 二叉搜索树的创建

## 分解

创建过程就是循环的插入节点，插入流程是核心。

## 插入流程

```flow

s=>start: 开始
e=>end: 结束

input=>inputoutput: 输入 node = new Node(val)

opInit=>operation: root = node
opSetCur=>operation: cur = root
opLeftNotNull=>operation: cur = cur.left
opLeftIsNull=>operation: cur.left = node
opRightNotNull=>operation: cur = cur.right
opRightIsNull=>operation: cur.right = node

conRoot=>condition: root is null?
conVal=>condition: node.val < cur.val
conLeft=>condition: cur.left is null?
conRight=>condition: cur.right is null?


s->input->conRoot
conRoot(yes, right)->opInit
conRoot(no)->opSetCur->conVal
conVal(yes)->conLeft
conVal(no)->conRight
conLeft(yes)->opLeftIsNull->e
conLeft(no)->opLeftNotNull(right)->conVal
conRight(yes)->opRightIsNull->e
conRight(no)->opRightNotNull(right)->conVal

```

## 代码

```js
function insert(node, root) {
  let cur = root;
  while (true) {
    if (node.val < cur.val) {
      if (cur.left) {
        cur = cur.left;
      } else {
        cur.left = node;
        break;
      }
    } else {
      if (cur.right) {
        cur = cur.right;
      } else {
        cur.right = node;
        break;
      }
    }
  }
}
```
