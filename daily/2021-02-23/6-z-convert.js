/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) return s;
  const rows = new Array(numRows).fill("");
  let flag = -1,
    i = 0;
  for (let c of s) {
    rows[i] += c;
    if (i === 0 || i === numRows - 1) flag = -flag;
    i += flag;
  }
  return rows.join("");
};
