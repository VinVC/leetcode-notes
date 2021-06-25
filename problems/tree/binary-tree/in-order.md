# 二叉树的中序遍历

`left -> node -> right`

> 注：遍历顺序的核心就是 node 的位置。
>
> 先序(pre-order): node 先访问，node -> left -> right
>
> 中序(in-order): node 中间访问, left -> node -> right
>
> 后序(post-order): node 最后访问, left -> right -> node

## 执行流程：

```flow
s=>start: 开始
e=>end: 结束

input=>inputoutput: 输入node,stack=[]

opN=>operation: push & node = node.left
opS=>operation: (pop、访问) & node = node.right

conN=>condition: node is null?
conS=>condition: stack is empty?

s->input->conN
conN(yes)->conS
conN(no)->opN(right)->conN
conS(yes)->e
conS(no)->opS(right)->conN
```

## 代码

```js
//中序遍历--迭代
inOrderInteration(root = this.root) {
  const stack = [];
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      root = stack.pop();
      root.showData();
      root = root.right;
    } else {
      break;
    }
  }
}
```
