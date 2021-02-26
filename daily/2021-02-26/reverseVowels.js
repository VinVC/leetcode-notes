/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
示例 1：

输入："hello"
输出："holle"
示例 2：

输入："leetcode"
输出："leotcede"
 

提示：

元音字母不包含字母 "y" 。
 * @return {string}
 */
var reverseVowels = function (s) {
  let start = 0,
    end = s.length - 1,
    sArr = s.split("");
  while (start < end) {
    while (!isVowels(s.charAt(start)) && start < end) start++;
    while (!isVowels(s.charAt(end)) && start < end) end--;
    if (start < end) {
      let temp = s.charAt(start);
      sArr[start] = s[end];
      sArr[end] = temp;
      start++;
      end--;
    }
  }
  return sArr.join("");
};

function isVowels(c) {
  c = c.toLowerCase();
  return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
}

// test

let s = "leetcode";
console.log(reverseVowels(s));
