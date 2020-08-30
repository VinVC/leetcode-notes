/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}滑动窗口类问题的解法总结
作用
一般用于求数组/字符串内区间的最值问题

特点
具有两个边界，分别为left和right，[left, right]就构成一个窗口了(一般是左闭右开)；
初始位置都为最左侧，窗口大小为0；
为了保证时间复杂度为：O(n)，窗口永远只能向右移动。
窗口如何变化
right变化，则窗口变大：当窗口内的条件未达到题目要求时，移动right；
left变化，则窗口变小：当窗口内的条件超过题目要求时(窗口溢出)，移动left。
难点
准确找到窗口变化的条件

回到该题
当开销小于等于预算时，移动右侧指针，扩大窗口；
当开销大于预算时，移动左侧指针，缩小窗口。
 * 
 */
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