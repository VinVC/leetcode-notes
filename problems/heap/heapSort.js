import { buildMaxHeap } from "./buildMaxHeap.js";
import { heapify, swap } from "./heapify.js";
function heapSortAscending(nums) {
  buildMaxHeap(nums);
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i);
    heapify(nums, 0, i);
  }
}

// test
const nums = [10, 21, 0, 3, 8, 4, 12, 5, 6, 8];

heapSortAscending(nums);

console.log(nums);
