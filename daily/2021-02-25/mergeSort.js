function mergeSort(nums, L, R) {
  if (L === R) return;
  let m = ((R - L) >> 1) + L;
  mergeSort(nums, L, m);
  mergeSort(nums, m + 1, R);
  merge(nums, L, m, R);
}

function merge(nums, L, mid, R) {
  let helpArr = [],
    p1 = L,
    p2 = mid + 1,
    i = 0;
  while (p1 <= mid && p2 <= R) {
    helpArr[i++] = nums[p1] <= nums[p2] ? nums[p1++] : nums[p2++];
  }
  while (p1 <= mid) {
    helpArr[i++] = nums[p1++];
  }
  while (p2 <= R) {
    helpArr[i++] = nums[p2++];
  }
  for (let j = 0; j < helpArr.length; j++) {
    nums[L + j] = helpArr[j];
  }
}

const arr = [5, 8, 2, 6, 1, 9];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
