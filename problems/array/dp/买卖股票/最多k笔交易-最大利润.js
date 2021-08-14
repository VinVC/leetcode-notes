/**
 * 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

示例 1：

输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
示例 2：

输入：k = 2, prices = [3,2,6,5,0,3]
输出：7
解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0;
  }

  const len = prices.length;
  k = Math.min(k, Math.floor(len / 2));
  const dp = new Array(len).fill(0).map(() => [0, 0].map(() => new Array(k + 1).fill(0)));
  // 边界值
  dp[0][0][0] = 0;
  for (let i = 0; i <= k; i++) {
    dp[0][1][i] = -prices[0];
  }
  for (let i = 1; i < len; i++) {
    dp[i][0][0] = dp[i - 1][0][0];
    dp[i][1][0] = Math.max(dp[i - 1][0][0] - prices[i], dp[i - 1][1][0]);
    for (let j = 1; j <= k; j++) {
      dp[i][0][j] = Math.max(dp[i - 1][0][j], dp[i - 1][1][j - 1] + prices[i]);
      dp[i][1][j] = Math.max(dp[i - 1][0][j] - prices[i], dp[i - 1][1][j]);
    }
  }
  return Math.max(...dp[len - 1][0]);
};
