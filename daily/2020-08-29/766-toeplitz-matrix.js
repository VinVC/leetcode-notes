/**
 * @param {number[][]} matrix
 * @return {boolean}
如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。
给定一个 M x N 的矩阵，当且仅当它是托普利茨矩阵时返回 True。

示例 1:

输入: 
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
输出: True
解释:
在上述矩阵中, 其对角线为:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。
各条对角线上的所有元素均相同, 因此答案是True。
示例 2:

输入:
matrix = [
  [1,2],
  [2,2]
]
输出: False
解释: 
对角线"[1, 2]"上的元素不同。

 */

/**
 * 
 * 思路
 * 1.(r1,c1)与(r2,c2)处于对角线的条件是r1-c1 = r2- c2
 * 2.用一个map来存储每条对角线的第一个值，如果后续遇到了这条对角线上的值不等于之前存储的值，那么就不是托普利茨矩阵
 */
var isToeplitzMatrix = function (matrix) {
  const row = matrix.length, col = matrix[0].length, mp = new Map()
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (mp.get(r - c) === undefined) {
        mp.set(r - c, matrix[r][c])
      } else {
        if (mp.get(r - c) !== matrix[r][c]) return false
      }
    }
  }
  return true
};