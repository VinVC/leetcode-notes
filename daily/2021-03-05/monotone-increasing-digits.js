/**
 * 
给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。

（当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）

示例 1:

输入: N = 10
输出: 9
示例 2:

输入: N = 1234
输出: 1234
示例 3:

输入: N = 332
输出: 299
说明: N 是在 [0, 10^9] 范围内的一个整数。
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  const strN = (N + "").split(""),
    len = strN.length;
  // 寻找左边第一个递减点
  let i = 1;
  while (i < len && strN[i - 1] <= strN[i]) {
    i++;
  }
  // 倒序查找第一个strN[i-1] <= strN[i]-1的点
  if (i < len) {
    /**
     * 这个地方的写法很有意思
     * 1.先让i-1的点-1，再--i
     * 2. 如果--i再-1的点小于等于了减1后的--i,那么说明找到了那个strN[i-1] <= strN[i]-1的点
     */
    while (i > 0 && strN[i - 1] > strN[i]) {
      strN[i - 1] -= 1;
      i--;
    }
    for (i += 1; i < len; i++) {
      strN[i] = "9";
    }
  }
  return strN.join("");
};
