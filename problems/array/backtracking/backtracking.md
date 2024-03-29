# core of backtrack

当前有很多可选值，哪一个选项的比重都是一样的。所以要循环选择它们，然后进入下一步。当程序回到此步的时候，将选取的状态重置，进入下一个循环元素。就好像没有选过当前元素一样，其实通过递归已经将当前选择置为当前循环元素，然后求出了后面所有可能性。然后将当前选择置为下一个可选元素，然后求取它的后续可能性。

## 使用场景

每一步都有多个可供选择的选项，且选项权重都一样；每一步选任何一个都可以；求所有可能性；

## 使用流程

1. 确定终止条件
   1. 超过最大宽度：一般是可选项为空了。意思就是每一次递归都要在新的可选项中选取新的值。如果可选项为空了，说明上一步抉择之后就已经到底了。
   2. 超过最大深度
2. 写循环
   1. 循环一般是遍历所有可选项。
   2. 选取当前循环到的元素
      1. 可能会更新后面的可选项
   3. 抉择之后进入下一次递归。(每次递归意味着深度+1)
   4. 递归回来之后，删除前面的选择。因为面对当前的所有的可选项，选取任意一个都是可以的，所以将前面的选择删除掉（path），状态也都重置到选择之前（可选项），然后选择后面的选项。
