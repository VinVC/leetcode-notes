/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let leftUp = [0, 0],
    rightDown = [matrix.length - 1, matrix[0].length - 1],
    ans = [];
  while (leftUp[0] <= rightDown[0] && leftUp[1] <= rightDown[1]) {
    if (leftUp[0] === rightDown[0] && leftUp[1] !== rightDown[1]) {
      for (let i = leftUp[1]; i <= rightDown[1]; i++) {
        ans.push(matrix[leftUp[0]][i]);
      }
    } else if (leftUp[0] !== rightDown[0] && leftUp[1] === rightDown[1]) {
      for (let i = leftUp[0]; i <= rightDown[0]; i++) {
        ans.push(matrix[i][leftUp[1]]);
      }
    } else if (leftUp[0] === rightDown[0] && leftUp[1] === rightDown[1]) {
      ans.push(matrix[leftUp[0]][leftUp[1]]);
    } else {
      printSquare(matrix, leftUp, rightDown, ans);
    }
    ++leftUp[0];
    ++leftUp[1];
    --rightDown[0];
    --rightDown[1];
  }
  return ans;
};
/**
 *
 * @param {*} matrix
 * @param {Array} leftUp 矩形左上角的点
 * @param {*} rightDown 矩形右下角的点
 */

function printSquare(matrix, leftUp, rightDown, ans) {
  let i = leftUp[0],
    j = leftUp[1];
  while (j < rightDown[1]) {
    ans.push(matrix[i][j++]);
  }
  while (i < rightDown[0]) {
    ans.push(matrix[i++][j]);
  }
  while (j > leftUp[1]) {
    ans.push(matrix[i][j--]);
  }
  while (i > leftUp[0]) {
    ans.push(matrix[i--][j]);
  }
}
