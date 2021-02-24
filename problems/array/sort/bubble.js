function bubbleSort(nums) {
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
}

// test

const arr = [2, 8, 1, 0, 9, 12, 4, 55];
bubbleSort(arr);
console.log(arr);
