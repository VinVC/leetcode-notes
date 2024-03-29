/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1

 */
/**
 *
 * @param {*} nums
 *
 * 思路：自底向上的动态规划，先求子结构的最优解
 * dp[i]: 以nums[i]结尾的数组的最长递增子序列的长度（注意：这个nums[i]一定要存在于子序列中，比如2 5 6 7 0，循环到0时，虽然前面的max很大，但是子序列包含0之后就只能为1了）
 * 状态转移方程：dp[i] = max(dp[j])+1   0 <= j < i && nums[i] > nums[j]
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len <= 1) return len;
  let dp = [1],
    max = 1;
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

//vino im
