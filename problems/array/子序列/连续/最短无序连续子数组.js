/**给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 最短 子数组，并输出它的长度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length;
  let maxn = -Number.MAX_VALUE,
    right = -1;
  let minn = Number.MAX_VALUE,
    left = n;
  for (let i = 0; i < n; i++) {
    if (maxn > nums[i]) {
      right = i;
    } else {
      maxn = nums[i];
    }
    if (minn < nums[n - i - 1]) {
      left = n - i - 1;
    } else {
      minn = nums[n - i - 1];
    }
  }
  return right === -1 ? 0 : right - left + 1;
};

//im
