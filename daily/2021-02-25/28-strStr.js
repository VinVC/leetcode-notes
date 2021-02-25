/**
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  let l = needle.length,
    n = haystack.length,
    curLen = 0,
    pl = 0;
  while (pl < n - l + 1) {
    while (pl < n - l + 1 && haystack.charAt(pl) !== needle.charAt(0)) pl++;
    if (haystack.charAt(pl) === needle.charAt(0)) {
      for (let i = 0; i < l; i++) {
        if (haystack.charAt(pl) === needle.charAt(i)) {
          pl++;
          curLen++;
        } else {
          pl = pl - curLen + 1;
          curLen = 0;
          break;
        }
      }
      if (curLen === l) return pl - curLen;
    }
  }
  return -1;
};
