/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  dfs(n, k, ans, 1, []);
  return ans;
};

function dfs(n, k, ans, start, cur) {
  if (cur.length === k) {
    ans.push([...cur]);
    return;
  }
  for (let i = start; i <= n; i++) {
    cur.push(i);
    dfs(n, k, ans, i + 1, cur);
    cur.pop();
  }
}
