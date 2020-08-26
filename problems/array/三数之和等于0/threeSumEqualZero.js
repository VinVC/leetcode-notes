/**
 * @param {*} nums number[]
 */
function threeSum(nums) {
  if (!nums || nums.length < 3) return []
  const ret = [], len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return ret;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
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