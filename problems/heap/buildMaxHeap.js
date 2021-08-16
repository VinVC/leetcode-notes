import { heapify } from "./heapify.js";
/**
 *
 * @param {number[]} nums
 */
export function buildMaxHeap(nums) {
  let lastNotLeafIndex = (nums.length >> 1) - 1;
  for (let i = lastNotLeafIndex; i >= 0; i--) {
    heapify(nums, i, nums.length);
  }
}
