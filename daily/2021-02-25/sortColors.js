/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i,
    j,
    len = nums.length;
  for (i = 1; i < len; i++) {
    let cur = nums[i]; //这里一定不能省事少定义cur,因为nums[i]会被nums[j+1]=nums[j]改变
    for (j = i - 1; j >= 0 && nums[j] > cur; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = cur;
  }
};

const arr = [5, 8, 2, 6, 1, 9];
sortColors(arr);
console.log(arr);
