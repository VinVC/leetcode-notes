/**
 * !给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

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

 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾的最长严格递增子序列的长度
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

/**
 *
 * @param {*} nums
 * dp[i]: 长度为i的递增子序列的末尾元素的最小值
 * dp[i]是关于i单调递增的
 */

function longthOfLISBinarySearch(nums) {
  const length = nums.length;
  if (length <= 1) return length;
  let len = 1,
    dp = [];
  dp[len] = nums[0];
  for (let i = 1; i < length; i++) {
    if (nums[i] > dp[len]) {
      dp[++len] = nums[i];
    } else {
      let l = 1,
        r = len,
        pos = 0;
      while (l <= r) {
        let mid = (l + r) >> 1;
        if (dp[mid] < nums[i]) {
          // 找到比nums[i]小且最靠右的值
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      dp[pos + 1] = nums[i];
    }
  }
  return len;
}
