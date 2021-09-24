/**https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0,
    pre = 0,
    mp = new Map()
  mp.set(0, 1)
  for (let val of nums) {
    pre += val
    if (mp.has(pre - k)) count += mp.get(pre - k)
    mp.set(pre, (mp.get(pre) || 0) + 1)
  }
  return count
}
