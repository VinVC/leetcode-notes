/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
  A.sort(function (a, b) {
    return a - b;
  });
  var len = A.length;
  // 注意这里有个特殊情况，就是我们压根“不切这一刀”，而是把整个数组全部上移或下移，这也是一种策略。这种策略下的差值是 A[len - 1] - A[0]
  var ans = A[len - 1] - A[0];
  for (var i = 0; i < len - 1; i++) {
    var max = Math.max(A[i] + K, A[len - 1] - K);
    var min = Math.min(A[0] + K, A[i + 1] - K);
    var diff = max - min;
    ans = Math.min(ans, diff);
  }
  return ans;
};

// vino
