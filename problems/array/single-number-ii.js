/**
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

 https://leetcode-cn.com/problems/single-number-ii/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    for (const num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 != 0) {
      ans |= 1 << i;
    }
  }
  return ans;
};

var singleNumber2 = function (nums) {
  let ans = 0;
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    for (const num of nums) {
      // 下面是错误的写法
      total += nums & (1 << i); //这样写是不行的，00001的1一定要放在第0位，这样才能保证total+十进制的数，如果是0000010，那么total+的就是2
    }
    if (total % 3 != 0) {
      ans |= 1 << i;
    }
  }
  return ans;
};

//im
