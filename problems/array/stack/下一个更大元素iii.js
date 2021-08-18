/**
 * 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。

 

示例 1：

输入：n = 12
输出：21
示例 2：

输入：n = 21
输出：-1
 

提示：

1 <= n <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-greater-element-iii

 * @param {number} n
 * @return {number}
 * 从右往左遍历，找到第一个s[i]<s[i+1],然后交换i与i+1
 */
var nextGreaterElement = function (n) {
  let nums = (n + "").split("");
  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      // 先在栈中找到一个最小的比nums[i]大的数，让这个数与i交换，然后将栈递增排列
      let start = stack[stack.length - 1],
        end = stack[0];
      while (start <= end && nums[start] > nums[i]) {
        start++;
      }
      start--;
      [nums[start], nums[i]] = [nums[i], nums[start]];

      // 递增栈
      start = stack[stack.length - 1];
      while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
      }

      let n = nums.join("") - 0;
      if (n >= 2147483648) return -1;
      return n;
    } else {
      stack.push(i);
    }
  }
  return -1;
};
