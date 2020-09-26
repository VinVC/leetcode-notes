function recursionSubset(arr, i, s) {
  if (s === 0) return true
  if (i === 0) return arr[0] === s
  if (arr[i] > s) return recursionSubset(arr, i - 1, s)
  let a = recursionSubset(arr, i - 1, s - arr[i])
  let b = recursionSubset(arr, i - 1, s)
  return a || b

}

function dpSubset(arr, target) {
  let subset = new Array(arr.length)
  for (let i = 0; i < subset.length; i++) {
    subset[i] = new Array(target + 1)
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < target + 1; j++) {
      if (j === 0) {
        subset[i][j] = true
        continue;
      }
      if (i === 0) {
        subset[i][j] = arr[0] === j
        continue;
      }
      if (arr[i] > j) {
        subset[i][j] = subset[i - 1][j]
      } else {
        let a = subset[i - 1][j - arr[i]]
        let b = subset[i - 1][j]
        subset[i][j] = a || b
      }
    }
  }
  return subset[arr.length - 1][target]
  // return subset
}






// test
const arr = [3, 34, 4, 12, 5, 2]

console.log(recursionSubset(arr, arr.length - 1, 9))
console.log(recursionSubset(arr, arr.length - 1, 10))
console.log(recursionSubset(arr, arr.length - 1, 11))
console.log(recursionSubset(arr, arr.length - 1, 12))
console.log(recursionSubset(arr, arr.length - 1, 13))
console.log(recursionSubset(arr, arr.length - 1, 14))
console.log(recursionSubset(arr, arr.length - 1, 15))

// dp
console.log('------分割线--------')
console.log(dpSubset(arr, 9))
console.log(dpSubset(arr, 10))
console.log(dpSubset(arr, 11))
console.log(dpSubset(arr, 12))
console.log(dpSubset(arr, 13))
console.log(dpSubset(arr, 14))
console.log(dpSubset(arr, 15))

