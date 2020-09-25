/**给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let n = s.length
  let dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n)
  }
  let ans = ''
  // l+1为枚举字串的长度,
  for (let l = 0; l < n; l++) {
    // i为字串的左边界，i+l为字串的右边界
    for (let i = 0; i + l < n; i++) {
      let j = i + l
      if (l === 0) {
        dp[i][j] = true
      } else if (l === 1) {
        dp[i][j] = s.charAt(i) === s.charAt(j)
      } else {
        dp[i][j] = (s.charAt(i) === s.charAt(j)) && dp[i + 1][j - 1]
      }
      if (dp[i][j] && l + 1 > ans.length) {
        ans = s.substring(i, i + l + 1)
      }
    }
  }
  return ans
};