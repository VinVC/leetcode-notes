function dp(arr) {
  const opt = []
  opt[0] = arr[0]
  opt[1] = Math.max(arr[0], arr[1])
  for (let i = 2; i < arr.length; i++) {
    opt[i] = Math.max(opt[i - 2] + arr[i], opt[i - 1])
  }
  return opt.pop()
}
const arr1 = [4, 1, 1, 9, 1]
const arr2 = [1, 2, 4, 1, 7, 8, 3]
console.log(dp(arr1))
console.log(dp(arr2))