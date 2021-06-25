## 层级遍历

`left -> right`

## 流程

```flow
s=>start: 开始
e=>end: 结束

input=>inputoutput: 输入node,queue=[]

op1=>operation: queue.push(node)
op2=>operation: shift、访问
opL=>operation: queue.push(left)
opR=>operation: queue.push(right)

conS=>condition: stack is empty?
conL=>condition: left is null?
conR=>condition: right is null

s->input->op1->conS
conS(yes)->e
conS(no)->op2(right)->conL
conL(yes,right)->conR
conL(no)->opL(right)->conR
conR(yes, right)->conS
conR(no)->opR(right)->conS
```

## 代码

```js
//广度优先--层级遍历
bfs(root = this.root) {
  const queue = [];
  if (root) queue.push(root);
  while (queue.length) {
    root = queue.shift();
    root.showData();
    if (root.left) queue.push(root.left);
    if (root.right) queue.push(root.right);
  }
}
```
