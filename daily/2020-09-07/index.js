/**
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

示例 1 :

输入: 2736
输出: 7236
解释: 交换数字2和数字7。
示例 2 :

输入: 9973
输出: 9973
解释: 不需要交换。
注意:

给定数字的范围是 [0, 108]
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let strArr = num.toString().split(''), last = []
  for (let i = 0; i < strArr.length; i++) {
    last[strArr[i] - 0] = i
  }
  for (let i = 0; i < strArr.length; i++) {
    for (let n = 9; n > strArr[i] - 0; n--) {
      if (last[n] > i) {
        let temp = strArr[i]
        strArr[i] = strArr[last[n]]
        strArr[last[n]] = temp
        return strArr.join('') - 0
      }
    }
  }
  return num
};