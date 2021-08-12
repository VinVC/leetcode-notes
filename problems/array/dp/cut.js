/**
 * !暴力递归
 * arr: 长度为1，2，3，4...的钢条的价格表[1, 5, 8, 9, 10, 17, 17, 20, 24, 30]
 * 长度为i的钢条的价格为：arr[i-1]
 */

function cutRecursion(arr, n) {
  if (n === 0) return 0;
  let q = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    q = Math.max(q, arr[i - 1] + cutRecursion(arr, n - i));
  }
  return q;
}

/**
 * !自底向上的动态规划
 * public static int buttom_up_cut(int []p)
    {
        int []r=new int[p.length+1];
        for(int i=1;i<=p.length;i++)
        {
            int q=-1;
            //①
            for(int j=1;j<=i;j++)
                q=Math.max(q, p[j-1]+r[i-j]);
            r[i]=q;
        }
        return r[p.length];
    }
 */
function cutDp(arr) {
  let dp = [0];
  // 依次计算出长度为1，2，3，4...的钢条的最优解
  for (let i = 1; i <= arr.length; i++) {
    let q = -1;
    // 内循环的含义：长度为i的钢条，依次从左边切去j（1<=j<=i）,剩余i-j, 求它们的最大值
    for (let j = 1; j <= i; j++) {
      q = Math.max(q, arr[j - 1] + dp[i - j]);
    }
    dp[i] = q;
  }
  return dp;
}

//test

const arr = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
console.log(cutRecursion(arr, 5));
const arr1 = [1, 5, 8];

console.log(cutDp(arr));
