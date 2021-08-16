/**
 *
 * @param {number[]} nums
 * @param {number} index
 */
export function heapify(nums, index, heapSize) {
  let left = 2 * index + 1;
  while (left < heapSize) {
    let largest = left + 1 < heapSize && nums[left + 1] > nums[left] ? left + 1 : left;
    largest = nums[largest] > nums[index] ? largest : index;
    if (largest === index) break;
    swap(nums, largest, index);
    index = largest;
    left = 2 * index + 1;
  }
}

export function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
