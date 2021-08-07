/**
 * 给定一个字符串数组，将字母异位词组合在一起。可以按任意顺序返回结果列表。

字母异位词指字母相同，但排列不同的字符串。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvaszc/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const strNumMap = new Map(),
    ans = [];
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let afterSort = str.split('').sort().join('');
    if (strNumMap.has(afterSort)) {
      let arr = strNumMap.get(afterSort);
      arr.push(str);
    } else {
      strNumMap.set(afterSort, [str]);
    }
  }
  for (const val of strNumMap.values()) {
    ans.push(val);
  }
  return ans;
};
