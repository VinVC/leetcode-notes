/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!nums || !nums.length) return [[]];
  const ans = [],
    flag = new Array(nums.length).fill(false);
  dfs(nums, ans, flag, []);
  return ans;
};

function dfs(dq, ans, flag, cur) {
  if (cur.length === nums.length || !dq.length) {
    ans.push([...cur]);
    return;
  }
  let size = dq.length;
  for (let i = 0; i < size; i++) {
    let num = dq.shift();
  }
}
