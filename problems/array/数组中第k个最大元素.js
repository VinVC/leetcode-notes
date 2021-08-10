/**给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

 

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 

提示：

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104
通过次数397,413提交次数614,106

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSort(nums, 0, nums.length - 1, k - 1);
};

function quickSort(nums, start, end, k) {
  if (start >= end) return nums[start];
  let picked = Math.floor(Math.random() * (end - start + 1) + start);
  swap(nums, picked, start);
  const p = partition(nums, start, end);
  if (p === k) return nums[p];
  return p < k ? quickSort(nums, p + 1, end, k) : quickSort(nums, start, p - 1, k);
}

function partition(nums, start, end) {
  let pivot = nums[start],
    bigger = start;
  for (let i = start + 1; i <= end; i++) {
    if (nums[i] > pivot) {
      swap(nums, i, ++bigger);
    }
  }
  swap(nums, start, bigger);
  return bigger;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   return quickSelect(nums, 0, nums.length - 1, nums.length - k);
// };

// function quickSelect(nums, l, r, index) {
//   swap(nums, r, Math.floor(Math.random() * (r - l + 1) + l));
//   let q = partition(nums, l, r);
//   if (q === index) return nums[q];
//   return q < index ? quickSelect(nums, q + 1, r, index) : quickSelect(nums, l, q - 1, index);
// }

// function partition(nums, l, r) {
//   let pivot = nums[r],
//     less = l - 1;
//   for (let j = l; j < r; j++) {
//     if (nums[j] <= pivot) {
//       swap(nums, ++less, j);
//     }
//   }
//   swap(nums, less + 1, r);
//   return less + 1;
// }

// function swap(nums, i, j) {
//   let temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }
