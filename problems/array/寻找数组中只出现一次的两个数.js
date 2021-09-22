/**
 * https://leetcode-cn.com/problems/single-number-iii/
 * 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

 

进阶：你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number-iii
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    n ^= nums[i];
  }
  let d = 1;
  while ((d & n) === 0) {
    d <<= 1;
  }
  let a = 0,
    b = 0;
  for (const val of nums) {
    if ((val & d) === 0) {
      a ^= val;
    } else {
      b ^= val;
    }
  }
  return [a, b];
}

//im
