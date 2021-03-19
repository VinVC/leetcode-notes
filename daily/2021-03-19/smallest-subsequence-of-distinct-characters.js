/**
 * 返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。

注意：该题与 316 https://leetcode.com/problems/remove-duplicate-letters/ 相同

 

示例 1：

输入：s = "bcabc"
输出："abc"
示例 2：

输入：s = "cbacdcbc"
输出："acdb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  let stack = [],
    flag = new Array(26).fill(false),
    aCode = "a".charCodeAt(),
    nums = new Array(26).fill(0),
    len = s.length;
  for (let i = 0; i < len; i++) {
    nums[s[i].charCodeAt() - aCode]++;
  }
  for (let i = 0; i < len; i++) {
    let ch = s[i],
      chIndex = ch.charCodeAt() - aCode;
    if (!flag[chIndex]) {
      while (stack.length && stack[stack.length - 1] > ch) {
        if (nums[stack[stack.length - 1].charCodeAt() - aCode]) {
          flag[stack[stack.length - 1].charCodeAt() - aCode] = false;
          stack.pop();
        } else {
          break;
        }
      }
      stack.push(ch);
      flag[chIndex] = true;
    }
    nums[chIndex]--;
  }
  return stack.join("");
};
