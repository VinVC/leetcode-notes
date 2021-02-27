/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums.length) return 0
  let leftIdx = binarySearch(nums, target, true),
    rightIdx = binarySearch(nums, target, false)
  if (nums[leftIdx] === target) return leftIdx
  if (leftIdx === 0) return 0
  if (rightIdx === nums.length) return nums.length
  return rightIdx - 1
}

function binarySearch(nums, target, lower) {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }
  return ans
}
