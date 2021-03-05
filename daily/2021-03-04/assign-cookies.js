/**
 * 输入: g = [1,2], s = [1,2,3]
输出: 2
解释: 
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/assign-cookies
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 
 */
var findContentChildren = function (g, s) {
  const glen = g.length,
    slen = s.length;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0, j = 0; i < glen && j < slen; i++, j++) {
    while (j < slen && g[i] > s[j]) {
      j++;
    }
    if (j < slen) {
      ans++;
    }
  }

  return ans;
};
