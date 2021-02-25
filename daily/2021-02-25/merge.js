/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0,
    helpArr = [],
    i = 0;
  while (p1 <= m - 1 && p2 <= n - 1) {
    helpArr[i++] = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
  }
  while (p1 <= m - 1) {
    helpArr[i++] = nums1[p1++];
  }
  while (p2 <= n - 1) {
    helpArr[i++] = nums2[p2++];
  }
  for (let i = 0; i < helpArr.length; i++) {
    nums1[i] = helpArr[i];
  }
};
