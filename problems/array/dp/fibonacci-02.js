/**
 * !自底向上的动态规划方法
 * 自底向上方法也是利用数组保存了先计算的值，为后面的调用服务。观察参与循环的只有 i，i-1 , i-2三项，因此该方法的空间可以进一步的压缩如下。
 *
 * !那么这种方法与暴力递归和备忘录方法的区别是啥呢？
 * *即使是备忘录方法，计算fib(6)的时候依然要算出前面的fib(1)、fib(2)、fib(3)...
 * *有人可能说，备忘录方法没有重新计算它们啊??
 * *虽然可以直接返回已经求出的子问题的解，但是依然会进到求该子问题的递归中，依然要为该子问题压栈，只是求解的速度快了而已。
 * *同时确实会少重复一些递归。
 * *那为何不先算出它们呢?
 * *这就是它叫动态规划的原因：先计算出子问题的解，然后再计算出问题的解
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
