```flow
s=>start: 开始
e=>end: 结束

input=>inputoutput: 输入head
output=>inputoutput: 输出pre

conCur=>condition: cur is null?

opInit=>operation: pre = null; cur = head
opReverse=>operation: next = cur.next; cur.next = pre
opMoveOn=>operation: pre = cur; cur = next

s->input->opInit->conCur
conCur(yes)->output->e
conCur(no)->opReverse(right)->opMoveOn(right)->conCur
```

核心：`cur.next = pre`
