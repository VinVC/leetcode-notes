/**
 * 
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

 

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。
 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：

输入：s = "a", t = "a"
输出："a"
示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
 

提示：

1 <= s.length, t.length <= 105
s 和 t 由英文字母组成
 

进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tMap = new Map(),
    sMap = new Map();

  for (const chr of t) {
    let n = tMap.get(chr);
    tMap.set(chr, n ? n + 1 : 1);
  }
  let l = 0,
    r = -1,
    sLen = s.length,
    len = Number.MAX_VALUE,
    ansL = -1,
    ansR = -1;
  while (r < sLen) {
    r++;
    let cur = s.charAt(r);
    if (tMap.has(cur)) {
      let n = sMap.get(cur);
      sMap.set(cur, n ? n + 1 : 1);
    }
    while (check(tMap, sMap) && l <= r) {
      if (r - l + 1 < len) {
        len = r - l + 1;
        ansL = l;
        ansR = l + len;
      }
      if (tMap.has(s.charAt(l))) {
        let num = sMap.get(s.charAt(l));
        sMap.set(s.charAt(l), num ? num - 1 : -1);
      }
      ++l;
    }
  }
  return ansL === -1 ? "" : s.substring(ansL, ansR + 1);
};

function check(mi, mo) {
  for (const [key, val] of mi.entries()) {
    let n = mo.get(key) || 0;
    if (n < val) {
      return false;
    }
  }
  return true;
}
