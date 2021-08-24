/**
 * 给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b
 

示例 1：

输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]
示例 2：

输入：arr = [1,2,3,4,5], k = 4, x = -1
输出：[1,2,3,4]
 

提示：

1 <= k <= arr.length
1 <= arr.length <= 104
数组里的每个元素与 x 的绝对值不超过 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-k-closest-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let rightCloseIndex = binarySearch(arr, x);
  let left = rightCloseIndex,
    right = rightCloseIndex;
  // （left, right）开区间
  while (right - left - 1 < k) {
    if (left < 0) {
      right++;
      continue;
    }
    if (right >= arr.length) {
      left--;
      continue;
    }
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      left--;
    } else {
      right++;
    }
  }
  return arr.slice(left + 1, right);
};

/**
 * 查找第一个大于等于target的值
 * @param {*} arr
 * @param {*} target
 */
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    ans = arr.length;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] >= target) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// 二分法，始终对长度为k的连续子数组进行操作，最终确定起点位置即可，即左端点
var findClosestElements2 = function (arr, k, x) {
  // 初始时，区间左边界 left 为 0，区间右边界 right 为 length - 1
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    // 二分查找去中间值
    const mid = left + Math.floor((right - left) / 2);
    // 比较长度为 k + 1 的区间的左右端点的数值与 x 的差值的绝对值
    // 假设此时这个区间的左边界的下标是 mid，右边界的下标是 mid + k
    // 如果右边界与 x 的差值的绝对值较小，左边界收缩，即 left = mid + 1
    // 如果左边界与 x 的差值的绝对值较小，右边界收缩，即 right = mid
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr.slice(left, left + k);
};
