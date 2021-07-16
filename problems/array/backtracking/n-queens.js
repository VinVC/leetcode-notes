/**
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(".");
  }
  const ans = [];
  backtrack(n, ans, 0, board);
  return ans;
};

function backtrack(n, ans, row, board) {
  if (row === n) {
    ans.push(board.map(row => row.join("")));
    return;
  }
  // 遍历列，每一行的任一列都有放Q的可能性
  for (let col = 0; col < n; col++) {
    if (!isValid(n, row, col, board)) continue;
    board[row][col] = "Q";
    backtrack(n, ans, row + 1, board);
    board[row][col] = ".";
  }
}

function isValid(n, curRow, curCol, board) {
  // 判断当前列是否合法
  for (let row = 0; row < curRow; row++) {
    if (board[row][curCol] === "Q") return false;
  }
  // 判断左上对角是否合法
  for (let row = curRow - 1, col = curCol - 1; row >= 0 && col >= 0; row--, col--) {
    if (board[row][col] === "Q") return false;
  }
  // 判断右上方是否合法
  for (let row = curRow - 1, col = curCol + 1; row >= 0 && col < n; row--, col++) {
    if (board[row][col] === "Q") return false;
  }
  return true;
}

// test
let ans = solveNQueens(8);
console.log(ans.length);
