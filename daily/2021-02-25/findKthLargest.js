/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

function quickSelect(nums, l, r, index) {
  swap(nums, r, Math.floor(Math.random() * (r - l + 1) + l));
  let q = partition(nums, l, r);
  if (q === index) return nums[q];
  return q < index ? quickSelect(nums, q + 1, r, index) : quickSelect(nums, l, q - 1, index);
}

function partition(nums, l, r) {
  let pivot = nums[r],
    less = l - 1;
  for (let j = l; j < r; j++) {
    if (nums[j] <= pivot) {
      swap(nums, ++less, j);
    }
  }
  swap(nums, less + 1, r);
  return less + 1;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// for test

const arr = [10, 4, 6, 2, 8, 9, 1, 3];

console.log(findKthLargest(arr, 6));
