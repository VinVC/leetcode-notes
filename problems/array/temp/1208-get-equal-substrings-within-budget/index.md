## 题目描述

给你两个长度相同的字符串，s 和 t。
将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。
用于变更字符串的最大预算是 maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。
如果你可以将 s 的子字符串转化为它在 t 中对应的子字符串，则返回可以转化的最大长度。
如果 s 中没有子字符串可以转化成 t 中对应的子字符串，则返回 0。


示例 1：
输入：s = "abcd", t = "bcdf", cost = 3
输出：3
解释：s 中的 "abc" 可以变为 "bcd"。开销为 3，所以最大长度为 3。

示例 2：
输入：s = "abcd", t = "cdef", cost = 3
输出：1
解释：s 中的任一字符要想变成 t 中对应的字符，其开销都是 2。因此，最大长度为 1。

示例 3：
输入：s = "abcd", t = "acde", cost = 0
输出：1
解释：你无法作出任何改动，所以最大长度为 1。

## 滑动窗口总结

### 作用

一般用于求数组/字符串内区间的最值问题

### 特点

+ 具有两个边界，分别为left和right，[left, right]就构成一个窗口了(一般是左闭右开)；
+ 初始位置都为最左侧，窗口大小为0；
+ 为了保证时间复杂度为：O(n)，窗口永远只能向右移动。

### 窗口如何变化

+ right变化，则窗口变大：当窗口内的条件未达到题目要求时，移动right；
+ left变化，则窗口变小：当窗口内的条件超过题目要求时(窗口溢出)，移动left。

### 难点

准确找到窗口变化的条件

### 对于该题

+ 当开销小于等于预算时，移动右侧指针，扩大窗口；
+ 当开销大于预算时，移动左侧指针，缩小窗口。

## 实现

```js
var equalSubstring = function (s, t, maxCost) {
  let left = 0, right = 0, cost = 0, result = 0
  while (right < s.length) {
    cost += Math.abs(t[right].charCodeAt() - s[right].charCodeAt())
    if (cost > maxCost) {
      cost -= Math.abs(t[left].charCodeAt() - s[left].charCodeAt())
      left++
    }
    result = Math.max(result, right - left + 1)
    right++
  }
  return result
};
```