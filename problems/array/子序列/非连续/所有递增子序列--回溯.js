/**
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

 

示例 1：

输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
示例 2：

输入：nums = [4,4,3,2,1]
输出：[[4,4]]
 

提示：

1 <= nums.length <= 15
-100 <= nums[i] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/increasing-subsequences
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = []
  const dfs = (cur, last, path) => {
    if (cur === nums.length) {
      if (path.length >= 2) {
        ans.push([...path])
      }
      return
    }
    if (nums[cur] >= last) {
      path.push(nums[cur])
      dfs(cur + 1, nums[cur], path)
      path.pop()
    }
    if (nums[cur] !== last) {
      dfs(cur + 1, last, path)
    }
  }
  dfs(0, -Number.MAX_VALUE, [])
  return ans
}
