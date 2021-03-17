/**
 * 984. 不含 AAA 或 BBB 的字符串
给定两个整数 A 和 B，返回任意字符串 S，要求满足：

S 的长度为 A + B，且正好包含 A 个 'a' 字母与 B 个 'b' 字母；
子串 'aaa' 没有出现在 S 中；
子串 'bbb' 没有出现在 S 中。
 

示例 1：

输入：A = 1, B = 2
输出："abb"
解释："abb", "bab" 和 "bba" 都是正确答案。
示例 2：

输入：A = 4, B = 1
输出："aabaa"
 

提示：

0 <= A <= 100
0 <= B <= 100
对于给定的 A 和 B，保证存在满足要求的 S。
 * @param {number} a
 * @param {number} b
 * @return {string}
 * 
 * 思路：贪心
 * 最优策略：先选数量较多的字母，插入两个之后插入另一个
 */
var strWithout3a3b = function (a, b) {
  let ans = [];
  while (a > 0 || b > 0) {
    let writeA = false,
      len = ans.length;
    if (len >= 2 && ans[len - 1] === ans[len - 2]) {
      if (ans[len - 1] === "b") writeA = true;
    } else {
      if (a >= b) writeA = true;
    }

    if (writeA) {
      ans.push("a");
      a--;
    } else {
      ans.push("b");
      b--;
    }
  }
  return ans.join("");
};
