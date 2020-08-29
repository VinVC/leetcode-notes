/**
 * @param {number[]} nums
 * @return {boolean}
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 */
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