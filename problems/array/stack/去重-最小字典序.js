/**
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同

 

示例 1：

输入：s = "bcabc"
输出："abc"
示例 2：

输入：s = "cbacdcbc"
输出："acdb"
 

提示：

1 <= s.length <= 104
s 由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicate-letters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {string}
 */

var removeDuplicateLetters = function (s) {
  const len = s.length,
    stack = [],
    numOfNums = new Map(),
    visited = new Map();
  for (let i = 0; i < len; i++) {
    let n = numOfNums.get(s[i]);
    numOfNums.set(s[i], n ? n + 1 : 1);
  }
  for (let i = 0; i < len; i++) {
    let ch = s[i];
    // 剩余的数量
    let n = numOfNums.get(ch);
    // 是否访问过
    let v = visited.get(ch);
    // 对于栈中已有的元素直接跳过，数量-1
    if (v) {
      numOfNums.set(ch, n - 1);
    } else {
      while (stack.length && stack[stack.length - 1] > ch) {
        if (numOfNums.get(stack[stack.length - 1])) {
          let t = stack.pop();
          visited.set(t, false);
        } else {
          break;
        }
      }
      stack.push(ch);
      numOfNums.set(ch, n - 1);
      visited.set(ch, true);
    }
  }
  return stack.join("");
};
