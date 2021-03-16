/**
 * 给你一个正整数 n ，生成一个包含 1 到 n的平方 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let leftUp = [0, 0],
    rightDown = [n - 1, n - 1],
    matrix = new Array(n).fill(0).map(() => new Array(n)),
    num = 1;
  while (leftUp[0] <= rightDown[0] && leftUp[1] <= rightDown[1]) {
    if (leftUp[0] === rightDown[0] && leftUp[1] === rightDown[1]) {
      matrix[leftUp[0]][leftUp[1]] = num++;
    } else {
      num = fillMatrix(matrix, leftUp, rightDown, num);
    }
    leftUp[0]++;
    leftUp[1]++;
    rightDown[0]--;
    rightDown[1]--;
  }
  return matrix;
};

function fillMatrix(matrix, leftUp, rightDown, num) {
  let i = leftUp[0],
    j = leftUp[1];
  while (j < rightDown[1]) {
    matrix[i][j++] = num++;
  }
  while (i < rightDown[0]) {
    matrix[i++][j] = num++;
  }
  while (j > leftUp[1]) {
    matrix[i][j--] = num++;
  }
  while (i > leftUp[0]) {
    matrix[i--][j] = num++;
  }
  return num;
}
