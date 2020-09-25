function recursionSubset(arr, i, s) {
  if (s === 0) return true
  if (i === 0) return arr[0] === s
  if (arr[i] > s) return recursionSubset(arr, i - 1, s)
  let a = recursionSubset(arr, i - 1, s - arr[i])
  let b = recursionSubset(arr, i - 1, s)
  return a || b

}

function dpSubset(arr, s) {
  let subset = new Array(arr.length)
  for (let i = 0; i < subset.length; i++) {
    subset[i] = new Array(s + 1)
  }
}






// test
const arr = [3, 34, 4, 12, 5, 2]

console.log(recursionSubset(arr, arr.length - 1, 9))
console.log(recursionSubset(arr, arr.length - 1, 0))