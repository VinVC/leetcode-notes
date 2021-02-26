/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s.charAt(i) === s.charAt(j)) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
}
