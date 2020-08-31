/**
 * @param {number[]} arr
 * @return {number}
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 */
var thirdMax = function (arr) {
  let len = arr.length
  if (len === 1) return arr[0]
  if (len === 2) return Math.max.apply(Math, arr)
  let first, second, third, f = true, flag = 0
  first = second = third = -Number.MAX_VALUE
  for (let i = 0; i < len; i++) {
    if (arr[i] === -Number.MAX_VALUE && f) {
      f = false
      flag++
    }
    if (arr[i] > first) {
      flag++
      third = second
      second = first
      first = arr[i]
    } else if (arr[i] > second && arr[i] < first) {
      flag++
      third = second
      second = arr[i]
    } else if (arr[i] > third && arr[i] < second) {
      flag++
      third = arr[i]
    }
  }
  return flag >= 3 ? third : first
}