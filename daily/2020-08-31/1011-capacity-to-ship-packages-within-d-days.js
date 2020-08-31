/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 * 
 */
var shipWithinDays = function (weights, D) {
  let left = - Number.MAX_VALUE, right = 0, len = weights.length
  for (let i = 0; i < len; i++) {
    right += weights[i]
    left = Math.max(weights[i], left)
  }
  let res = right, mid
  while (left <= right) {
    let usedDays = 0, temp = 0
    mid = Math.floor((left + right) / 2)
    for (let i = 0; i < len; i++) {
      temp += weights[i]
      if (temp > mid) {
        usedDays++
        temp = weights[i]
      }
    }
    usedDays++
    if (usedDays > D) {
      left = mid + 1
    } else {
      right = mid - 1
      res = Math.min(res, mid)
    }
  }
  return res
};

console.log(shipWithinDays([1, 2, 3, 1, 1], 4))