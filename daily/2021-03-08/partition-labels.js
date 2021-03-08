/**
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

 

示例：

输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 

提示：

S的长度在[1, 500]之间。
S只包含小写字母 'a' 到 'z' 。

链接：https://leetcode-cn.com/problems/partition-labels

 * @param {string} S
 * @return {number[]}
 * 思路：
 * 1.遍历每个字母最后出现的位置:last[i]
 * 2.每个片段end - start + 1.遍历字符，end = max(end, last[i]),if end === last[i]说明当前遍历完的片段的最末尾就是当前i
 * 
 */
var partitionLabels = function (S) {
  let last = [],
    len = s.length,
    aCode = "a".charCodeAt();
  for (let i = 0; i < len; i++) {
    last[s[i].charCodeAt() - aCode] = i;
  }
  let start = 0,
    end = 0,
    ans = [];
  for (let i = 0; i < len; i++) {
    end = Math.max(end, last[s[i].charCodeAt() - aCode]);
    if (i === end) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }
  return ans;
};
