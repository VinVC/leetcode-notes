/**
 * 
 * 输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const ans = [];
  const digitsLetterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  backtrack(ans, digitsLetterMap, digits, 0, []);
  return ans;
};

/**
 *
 * @param {*} ans 返回值
 * @param {*} mp 映射
 * @param {string} input 输入
 * @param {number} index 当前输入的index
 * @param {array} cur 当前一个子结果
 */
function backtrack(ans, mp, input, index, cur = []) {
  if (index === input.length) {
    ans.push(cur.join(""));
    return;
  }
  let curNo = input[index],
    letters = mp[curNo];
  for (let i = 0; i < letters.length; i++) {
    cur.push(letters[i]);
    backtrack(ans, mp, input, index + 1, cur);
    cur.pop();
  }
}
