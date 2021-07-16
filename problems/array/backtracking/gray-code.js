/**
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

格雷编码序列必须以 0 开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gray-code
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const res = [0];
  let head = 1;
  for (let i = 0; i < n; i++) {
    for (let j = res.length - 1; j >= 0; j--) {
      res.push(head + res[j]);
    }
    head <<= 1;
  }
  return res;
};

// vino
