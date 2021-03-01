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
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 * buy[i][j]：第i天时进行j次交易，手中剩余1只股票时的最大利润
 * sell[i][j]: 第i天时进行j次交易，手中不剩余股票的最大利润
 * 状态转移方程：
 * buy[i][j] = max(buy[i-1][j],sell[i-1][j]-price[i])
 * sell[i][j] = max(buy[i-1][j-1], sell[i-1][j-1]+price[i])
 * 边界条件：
 * buy[0][0...k]: buy[0][0] = -price[0]; buy[0][1...k] = -Number.MAX_VALUE
 * sell[0][0...k]: sell[0][0] = 0; sell[0][1...k] = -Number.MAX_VALUE
 * 
 */
var maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0;
  }

  const n = prices.length;
  k = Math.min(k, Math.floor(n / 2));
  const buy = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  const sell = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));

  buy[0][0] = -prices[0];
  sell[0][0] = 0;
  for (let i = 1; i <= k; ++i) {
    buy[0][i] = sell[0][i] = -Number.MAX_VALUE;
  }

  for (let i = 1; i < n; ++i) {
    buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i]);
    for (let j = 1; j <= k; ++j) {
      buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i]);
      sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i]);
    }
  }

  return Math.max(...sell[n - 1]);
};
