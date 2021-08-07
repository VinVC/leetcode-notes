/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    zeroRow = new Set(),
    zeroColumn = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroRow.add(i);
        zeroColumn.add(j);
      }
    }
  }
  for (const row of zeroRow) {
    for (let i = 0; i < n; i++) {
      matrix[row][i] = 0;
    }
  }
  for (const col of zeroColumn) {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  }
};
