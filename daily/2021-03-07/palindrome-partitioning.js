/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

 

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]
 

提示：

1 <= s.length <= 16
s 仅由小写英文字母组成

链接：https://leetcode-cn.com/problems/palindrome-partitioning

 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const dfs = i => {
    if (i === n) {
      ret.push(ans.slice());
      return;
    }
    for (let j = i; j < n; ++j) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  };

  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
  let ret = [],
    ans = [];

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1];
    }
  }
  dfs(0);
  return ret;
};

/**
 * 总结：
 *1. 动态规划+回溯
 *2. 先计算每一个[i,j]区间内是不是回文串，用f[i][j]表示 i>=j时直接为true;i<j时f[i][j] = f[i+1][j-1] && s[i] === s[j]
 */

/**
 * 2021-03-07 vino
 */
