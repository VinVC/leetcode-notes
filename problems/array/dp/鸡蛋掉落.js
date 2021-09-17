/**
 * https://leetcode-cn.com/problems/super-egg-drop/
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
const superEggDrop = function (k, n) {
  const memo = new Map();
  const dp = (k, n) => {
    if (!memo.has(100 * n + k)) {
      let ans;
      if (n === 0) {
        ans = 0;
      } else if (k === 1) {
        ans = n;
      } else {
        let low = 1,
          high = n;
        while (low + 1 < high) {
          let x = (low + high) >> 1;
          let t1 = dp(k - 1, x - 1);
          let t2 = dp(k, n - x);
          if (t1 < t2) {
            low = x;
          } else if (t1 > t2) {
            high = x;
          } else {
            low = high = x;
          }
        }
        ans = 1 + Math.min(Math.max(dp(k - 1, low - 1), dp(k, n - low)), Math.max(dp(k - 1, high - 1), dp(k, n - high)));
      }
      memo.set(100 * n + k, ans);
    }
    return memo.get(100 * n + k);
  };
  return dp(k, n);
};
