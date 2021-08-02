/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvf0kh/
 */

/**
 * !自顶向下的暴力递归--超时了
 * @param {*} coins
 * @param {*} amount
 * @returns
 */
var coinChangeRecursion = function (coins, amount) {
  if (!amount) return 0;
  let ans = Number.MAX_VALUE;

  const backtrack = (coins, amount, cur) => {
    if (amount === 0) {
      ans = Math.min(ans, cur.length);
    }
    if (amount < 0) return;
    for (let i = 0; i < coins.length; i++) {
      cur.push(coins[i]);
      backtrack(coins, amount - coins[i], cur);
      cur.pop();
    }
  };

  backtrack(coins, amount, []);

  return ans === Number.MAX_VALUE ? -1 : ans;
};

/**
 * !自顶向下的备忘录
 * @param {*} coins
 * @param {*} amount
 * @returns
 */
var coinChangeMemo = function (coins, amount) {
  if (!amount) return 0;
  const max = amount + 1;
  // 这个数组表示各个amount的最小硬币数量
  const count = new Array(amount + 1);
  count[0] = 0;

  /**
   *
   * @param {*} left 当前剩余的amount
   * @returns 返回当前left的最小数量
   */
  const backtrack = (left) => {
    if (left < 0) return -1;
    if (left === 0) return 0;
    // 使用memo
    if (count[left]) return count[left];
    let min = Number.MAX_VALUE;
    for (let i = 0; i < coins.length; i++) {
      let res = backtrack(left - coins[i]);
      if (res >= 0 && res < min) {
        min = res + 1;
      }
    }
    count[left] = min === Number.MAX_VALUE ? -1 : min;
    return count[left];
  };

  return backtrack(amount);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 思路：
 * !自底向上的动态规划
 * 1. 状态转移
 * f(n) = min(f(n-i))+1
 * 2. base case
 * f(0) = 0
 * f(coin) = 1
 */
var coinChangeDp = function (coins, amount) {
  const max = amount + 1;
  // 用来存储0..amount的最小硬币数
  const dp = new Array(amount + 1).fill(max);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp(i - coins[j]) + 1);
      }
    }
  }
  return dp[amount] === max ? -1 : dp[amount];
};
