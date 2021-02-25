function insertSort(nums) {
  let j;
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    for (j = i - 1; j >= 0 && nums[j] > cur; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = cur;
  }
}

const arr = [5, 8, 2, 6, 1, 9];
insertSort(arr);
console.log(arr);
