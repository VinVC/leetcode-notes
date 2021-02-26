/**
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const ans = [];
  if (!s.length || !words.length) return ans;
  let m1 = new Map(),
    m2 = new Map(),
    sSize = s.length,
    wordSize = words[0].length,
    wordsNum = words.length;
  for (let i = 0; i < wordsNum; i++) {
    m1.set(words[i], m1.get(words[i]) ? m1.get(words[i]) + 1 : 1);
  }
  // 循环的起点
  for (let i = 0; i < wordSize; i++) {
    let left = i,
      right = i,
      count = 0;
    m2.clear();
    while (right + wordSize <= sSize) {
      let subString = s.substring(right, right + wordSize);
      right += wordSize;
      if (m1.get(subString)) {
        m2.set(subString, m2.get(subString) ? m2.get(subString) + 1 : 1);
        count++;
        // 检查是否超过数量
        while (m2.get(subString) > m1.get(subString)) {
          let start = s.substring(left, left + wordSize);
          m2.set(start, m2.get(start) - 1);
          left += wordSize;
          count--;
        }
        if (count === wordsNum) {
          ans.push(left);
        }
      } else {
        left = right;
        count = 0;
        m2.clear();
      }
    }
  }
  return ans;
};

// test
const s = "aaaaaaaaaaaaaa",
  words = ["aa", "aa"];
console.log(findSubstring(s, words));
