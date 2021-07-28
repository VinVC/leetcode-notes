/**
 *!自顶向下的暴力递归
 * @param {*} arr 输入数组
 * @param {*} index 数组末尾index
 * @param {*} target 和
 * @returns
 */
function recursionSubset(arr, index, target) {
  if (target === 0) return true;
  if (index === 0) return arr[0] === target;
  if (arr[index] > target) return recursionSubset(arr, index - 1, target);
  let a = recursionSubset(arr, index - 1, target - arr[index]);
  let b = recursionSubset(arr, index - 1, target);
  return a || b;
}
/**
 * !自底向上的动态规划
 * @param {*} arr
 * @param {*} target
 * @returns
 *
 * subset[i][j]: 长度为i+1的数组是否包含和为j的子序列
 */
function dpSubset(arr, target) {
  let subset = new Array(arr.length);
  for (let i = 0; i < subset.length; i++) {
    subset[i] = new Array(target + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    subset[i][0] = true;
    for (let j = 1; j < target + 1; j++) {
      if (i === 0) {
        subset[0][j] = arr[0] === j;
        continue;
      }
      if (arr[i] > j) {
        subset[i][j] = subset[i - 1][j];
      } else {
        let a = subset[i - 1][j - arr[i]];
        let b = subset[i - 1][j];
        subset[i][j] = a || b;
      }
    }
  }
  return subset[arr.length - 1][target];
}

// test
const arr = [3, 34, 4, 12, 5, 2];

console.log(recursionSubset(arr, arr.length - 1, 9));
console.log(recursionSubset(arr, arr.length - 1, 10));
console.log(recursionSubset(arr, arr.length - 1, 11));
console.log(recursionSubset(arr, arr.length - 1, 12));
console.log(recursionSubset(arr, arr.length - 1, 13));
console.log(recursionSubset(arr, arr.length - 1, 14));
console.log(recursionSubset(arr, arr.length - 1, 15));

// dp
console.log("------分割线--------");
console.log(dpSubset(arr, 9));
console.log(dpSubset(arr, 10));
console.log(dpSubset(arr, 11));
console.log(dpSubset(arr, 12));
console.log(dpSubset(arr, 13));
console.log(dpSubset(arr, 14));
console.log(dpSubset(arr, 15));
