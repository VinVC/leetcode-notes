## 题目描述

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum

## 思路

### 解法一：三层遍历

### 解法二：先排序再头尾双指针

1. 排序
2. 遍历数组
3. 当前元素是否大于0，如果是则终止循环return res
4. 去重：判断当前的元素的下标是否大于0且是否等于前一个元素，如果是则continue
  - `这里容易出错，要记得不要超出数组的长度.要先判断i>0再判断 i 与 i-1`
5. 头尾指针，头指针等于i+1, 尾指针等于数组末尾。当L小于R时，进入while循环体
- 1. i+L+R等于0：while循环去重，去除L=== L+1的和R === R-1的
- 2. 小于0：L++
- 3. 大于0：R--

## 实现

```js
function threeSum(nums) {
  if (!nums || nums.length < 3) return []
  const ret = [], len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i>0  && nums[i] === nums[i - 1]) continue;
    let L = i + 1, R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        ret.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      } else if (sum < 0) {
        L++
      } else {
        R--
      }
    }
  }
  return ret
}
```
  

