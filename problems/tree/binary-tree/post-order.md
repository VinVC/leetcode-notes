## 后序遍历

`left -> right -> node`

## 执行流程

```flow
s=>start: 开始
e=>end: 结束

input=>inputoutput: 输入node,stack=[],ans=[]

op=>operation: stack.push(node)
opReverse=>operation: return ans.reverse()
opS=>operation: pop、ans.push(node.val)
opL=>operation: stack.push(left)
opR=>operation: stack.push(right)

conS=>condition: stack is empty?
conL=>condition: left is null?
conR=>condition: right is null?


s->input->op->conS
conS(yes)->opReverse->e
conS(no)->opS(right)->conL
conL(yes, right)->conR
conL(no)->opL(right)->conR
conR(yes, right)->conS
conR(no)->opR(right)->conS
```
