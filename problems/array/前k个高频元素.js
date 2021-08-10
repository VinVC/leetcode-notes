/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

 

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
 

提示：

1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvzpxi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = numMap.get(nums[i]);
    numMap.set(nums[i], num ? num + 1 : 1);
  }
  const values = [...numMap.entries()]; //[[num, count], [num, count]]
  // 求前k个较大的count
  const ans = [];
  quickSort(values, ans, 0, values.length - 1, 0, k);
  return ans;
};

function quickSort(nums, ans, start, end, ansIndex, k) {
  let picked = Math.floor(Math.random() * (end - start + 1) + start);
  swap(nums, picked, start);
  let pivot = nums[start][1];
  let index = start; //index最终指向pivot, index 左边大于pivot, index右边小于pivot
  for (let i = start + 1; i <= end; i++) {
    if (nums[i][1] >= pivot) {
      swap(nums, index + 1, i);
      index++;
    }
  }
  swap(nums, start, index);
  if (k <= index - start) {
    quickSort(nums, ans, start, index - 1, ansIndex, k);
  } else {
    for (let i = start; i <= index; i++) {
      ans[ansIndex++] = nums[i][0];
    }
    if (k > index - start + 1) {
      quickSort(nums, ans, index + 1, end, ansIndex, k - (index - start + 1));
    }
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
