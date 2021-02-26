/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Number.MAX_SAFE_INTEGER,
    sum = 0,
    start = 0,
    end = 0;
  while (end < nums.length) {
    sum += nums[end];
    while (sum >= target) {
      min = Math.min(min, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
