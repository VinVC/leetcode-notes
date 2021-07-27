/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。**这个地方所有的房屋都 围成一圈** ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

 

示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：

输入：nums = [0]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
 * @param {number[]} nums
 * @return {number}
 * !注意：围成一圈
 * 比着打家劫舍i多的限制：不可同时取0和length-1的数
 * 状态转移方程：
 * 
 */
var rob = function (nums) {
  const len = nums.length;
  if (len <= 1) return nums[0] || 0;
  const opt1 = [],
    opt2 = [];
  opt1[0] = nums[0];
  opt1[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len - 1; i++) {
    opt1[i] = Math.max(opt1[i - 2] + nums[i], opt1[i - 1]);
  }
  opt2[len - 1] = nums[len - 1];
  opt2[len - 2] = Math.max(nums[len - 1], nums[len - 2]);
  for (let i = len - 3; i > 0; i--) {
    opt2[i] = Math.max(opt2[i + 2] + nums[i], opt2[i + 1]);
  }
  return Math.max(opt1[opt1.length - 1], opt2[1]);
};
