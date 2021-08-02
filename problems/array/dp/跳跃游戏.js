/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

 

示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvb8zs/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {boolean}
 * 思路：
 * !自底向上的动态规划
 * 从0开始计算每个可达到位置的下一个最远位置，核心：
 * 1.可达到位置，用i<= rightMost来控制。如果i>rightMost了，那么说明当前的i无法达到。
 * 2.下一个最远位置，用max(rightMost, i+nums[i])来得出
 */
var canJump = function (nums) {
  let len = nums.length,
    rightMost = 0;
  for (let i = 0; i < len; i++) {
    if (i <= rightMost) {
      rightMost = Math.max(rightMost, i + nums[i]);
      if (rightMost >= len - 1) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
};

// vino im
