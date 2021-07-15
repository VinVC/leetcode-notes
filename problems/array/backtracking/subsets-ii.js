/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
示例 2：

输入：nums = [0]
输出：[[],[0]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets-ii
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (!nums.length) return [[]];
  nums.sort((a, b) => a - b);
  const ans = [];
  dfs(nums, ans, 0, [], false);
  return ans;
};

function dfs(nums, ans, index, cur, used) {
  if (index === nums.length) {
    ans.push([...cur]);
    return;
  }
  dfs(nums, ans, index + 1, cur, false);
  if (!used && index > 0 && nums[index - 1] === nums[index]) {
    return;
  }
  cur.push(nums[index]);
  dfs(nums, ans, index + 1, cur, true);
  cur.pop();
}

//vino im
