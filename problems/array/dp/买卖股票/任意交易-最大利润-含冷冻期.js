/**
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
示例:

输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} prices
 * @return {number}
 * 思路：
 * 动态规划
 * 剩余0支股票时才有冷冻期和非冷冻期之分
 * dp[i][0]: 第i天结束时手中剩余1支股票的最大利润
 * dp[i][1]: 第i天结束时手中剩余0支股票，且在i天卖出股票
 * dp[i][2]: 第i天结束时手中剩余0支股票，且不是在i天卖出的股票
 */
var maxProfit = function (prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(() => [0, 0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(dp[len - 1][1], dp[len - 1][2]);
};
