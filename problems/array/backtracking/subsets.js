/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums.length) return [[]];
  const ans = [];
  dfs(nums, ans, 0, []);
  return ans;
};

function dfs(nums, ans, index, cur) {
  if (index === nums.length) {
    ans.push([...cur]);
    return;
  }
  cur.push(nums[index]);
  dfs(nums, ans, index + 1, cur);
  cur.pop();
  dfs(nums, ans, index + 1, cur);
}

//vino im
/**
 * 思路：
 * 对于任一个元素，都有选和不选两种状态
 * 所以可以先选然后往后走，然后去除选择，再往后递归
 * 递归出口就是index === nums.length
 */
