/**
 * @description: 求nums中每一个元素对应的下一个更大的元素数组
 * @param {number[]} nums
 *
 */
// 倒序遍历
function nextGreaterElement(nums) {
  const ans = [],
    stack = []; //存储nums[index],栈底->栈顶：单调递减
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }
    ans[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[i]);
  }
  return ans;
}

// 正序遍历
function nextGreaterElementAesc(nums) {
  const ans = new Array(nums.length).fill(-1),
    stack = []; //存储index,栈底->栈顶：单调递减
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      ans[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return ans;
}

// test
const arr = [2, 1, 2, 4, 3];
console.log(nextGreaterElement(arr));
console.log(nextGreaterElementAesc(arr));
