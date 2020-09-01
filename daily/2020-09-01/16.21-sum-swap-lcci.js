/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 * 思路：
 * 1. sum1-sum2如果为奇数，则返回空数组，因为交换两个数之后引起的差值变化一定是2(a-b)
 * 2. sum1-sum2如果为偶数，则由arr1生成一个map,然后遍历arr2,查看每个元素+diff/2是否存在于map中
 */
var findSwapValues = function (array1, array2) {
  const mp = new Map(), res = []
  let sum1 = 0, sum2 = 0
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i]
    mp.set(array1[i], i)
  }
  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i]
  }
  let diff = sum1 - sum2
  if (diff % 2 == 0) {
    for (let i = 0; i < array2.length; i++) {
      let temp = array2[i] + diff / 2
      if (mp.get(temp) !== undefined) {
        res.push(temp, array2[i])
        break;
      }
    }
  }
  return res
};