## 题目描述

给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
示例 1:

输入: nums = [4,2,3]
输出: true
解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
示例 2:

输入: nums = [4,2,1]
输出: false
解释: 你不能在只改变一个元素的情况下将其变为非递减数列。

说明：

1 <= n <= 10 ^ 4
- 10 ^ 5 <= nums[i] <= 10 ^ 5

## 思路

### 解法一：辅助数组
+ 修改每个元素，使i+1 = i, 并验证修改之后的辅助数组是不是非递减的

### 解法二：寻找向下的拐点
1.当出现nums[i-1]大于nums[i]时,此时出现了拐点
  + 如果 nums[i-2] `<` nums[i],那么，需要nums[i-1]=nums[i]来消除拐点
  + 如果 nums[i-2] `>` nums[i],那么，需要nums[i] = nums[i-1]来消除拐点

2.实现

```js
var checkPossibility = function (nums) {
  if (nums.length <= 2) return true
  let len = nums.length, sum = 0
  for (let i = 1; i < len; i++) {
    if (nums[i - 1] > nums[i]) {
      sum++
      if (sum === 2) return false
      if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1]
      } else {
        nums[i - 1] = nums[i]
      }
    }
  }
  return true
};
```