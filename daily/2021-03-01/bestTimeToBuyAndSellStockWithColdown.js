/**
 * @param {number[]} prices
 * @return {number}
 * 状态转移方程：
 * 第i天结束之后的状态：
 * 持有：
 * dp[i][0]:
 * 不持有：
 * dp[i][1]:
 * dp[i][2]:
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  const len = prices.length,
    dp = new Array(len).fill(0).map(e => [0, 0, 0]);
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

var maxProfit1 = function (prices) {
  if (!prices.length) return 0;
  let len = prices.length,
    dp0 = -prices[0],
    dp1 = 0,
    dp2 = 0;
  for (let i = 1; i < len; i++) {
    let newDp0 = Math.max(dp0, dp2 - prices[i]),
      newDp1 = dp0 + prices[i],
      newDp2 = Math.max(dp1, dp2);
    dp0 = newDp0;
    dp1 = newDp1;
    dp2 = newDp2;
  }
  return Math.max(dp1, dp2);
};
