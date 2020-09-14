/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let left, right, delta = Number.MAX_VALUE, less = true
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    left = i + 1
    right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === target) {
        return target
      } else if (sum < target) {
        if (target - sum < delta) {
          delta = target - sum
          less = true
        }
        while (left < right && nums[left] === nums[++left]);
      } else {
        if (sum - target < delta) {
          delta = sum - target
          less = false
        }
        while (left < right && nums[right] === nums[--right]);
      }
    }
  }
  if (less) {
    return target - delta
  } else {
    return target + delta
  }
};