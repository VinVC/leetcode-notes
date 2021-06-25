# 二叉树的中序遍历

`left -> node -> right`

> 注：遍历顺序的核心就是 node 的位置。
>
> 先序(pre-order): node 先访问，node -> left -> right
>
> 中序(in-order): node 中间访问, left -> node -> right
>
> 后序(post-order): node 最后访问, left -> right -> node

## 根据顺序要求的执行流程：

```flow
st=>start: 开始
e=>end: 结束

con1=>condition: is null?
con2=>condition: stack is empty?

op=>operation: 判断node
opNodeNotNull=>operation: push & node = node.left
opStackNotEmpty=>operation: (pop、访问) & node = node.right

st->op->con1

con1(no, right)->opNodeNotNull(right)->op
con1(yes)->con2

con2(no, right)->opStackNotEmpty(right)->op
con2(yes)->e
```

## 解释

1. 当左子节点为空时，则才开始访问当前节点
2. 当右子节点为空时，则上升一层
