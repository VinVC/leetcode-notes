/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return [];
  const ans = [];
  dfs(n, ans, 0, 0, []);
  return ans;
};

function dfs(n, ans, open, close, cur) {
  if (cur.length === 2 * n) {
    ans.push(cur.join(""));
    return;
  }
  if (open < n) {
    cur.push("(");
    dfs(n, ans, open + 1, close, cur);
    cur.pop();
  }
  if (close < open) {
    cur.push(")");
    dfs(n, ans, open, close + 1, cur);
    cur.pop();
  }
}
