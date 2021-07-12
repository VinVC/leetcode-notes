/**
 * !自底向上的动态规划方法
 * 自底向上方法也是利用数组保存了先计算的值，为后面的调用服务。观察参与循环的只有 i，i-1 , i-2三项，因此该方法的空间可以进一步的压缩如下。
 */
function fib1(n) {
  if (n <= 0) return n;
  let memo = [];
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}

// 优化之后
function fib2(n) {
  if (n <= 1) return n;
  let memoI2 = 0,
    memoI1 = 1,
    memoI = 1;
  for (let i = 2; i <= n; i++) {
    memoI = memoI2 + memoI1;
    memoI2 = memoI1;
    memoI1 = memoI;
  }
  return memoI;
}
