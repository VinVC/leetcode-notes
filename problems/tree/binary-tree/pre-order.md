## 先序遍历

`node -> left -> right`

## 执行流程

```flow
s=>start: 开始
e=>end: 结束
e2=>end: 结束

input=>inputoutput: 输入node,stack=[]

op1=>operation: stack.push(node)
op2=>operation: pop、访问
opR=>operation: stack.push(right)
opL=>operation: stack.push(left)

conS=>condition: stack is empty?
conR=>condition: right is empty?
conL=>condition: left is empty?


s->input->op1->conS
conS(yes)->e
conS(no)->op2(right)->conR
conR(yes,right)->conL
conR(no)->opR(right)->conL
conL(yes,right)->conS
conL(no)->opL(left)->conS
```

## 代码

```js
//先序遍历--迭代
preOrderInteration(root = this.root) {
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    root = stack.pop();
    root.showData();
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      stack.push(root.left);
    }
  }
}
```
