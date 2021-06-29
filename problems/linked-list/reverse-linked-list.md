```flow
s=>start: 开始
e=>end: 结束

input=>inputoutput: 输入head

conCur=>condition: cur is null?

opInit=>operation: pre = null; cur = head
opReverse=>operation: next = cur.next; cur.next = pre
opMoveOn=>operation: pre = cur; cur = next

s->input->opInit->conCur
conCur(yes)->e
conCur(no)->opReverse(right)->opMoveOn(right)->conCur
```
