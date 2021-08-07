/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv2kgi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let helpSet = new Set(),
    len = s.length,
    ans = 0,
    rk = -1;
  for (let i = 0; i < len; i++) {
    if (i > 0) {
      helpSet.delete(s[i - 1]);
    }
    while (rk + 1 < len && !helpSet.has(s[rk + 1])) {
      helpSet.add(s[rk + 1]);
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
