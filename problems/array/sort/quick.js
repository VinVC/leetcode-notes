function quickSort(nums, left, right) {
  if (left < right) {
    swap(nums, right, Math.floor(Math.random() * (right - left + 1) + left))
    let p = partition(nums, left, right)
    quickSort(nums, left, p[0])
    quickSort(nums, p[1], right)
  }
}

function partition(nums, left, right) {
  let L = left - 1,
    R = right,
    p = left
  while (p < R) {
    if (nums[p] < nums[right]) {
      p++
      L++
    } else if (nums[p] > nums[right]) {
      swap(nums, p, --R)
    } else {
      p++
    }
  }
  swap(nums, right, R)
  return [L, R + 1]
}

function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

//test
const arr = [3, 2, 9, 10, 4, 1, 5, 9]

quickSort(arr, 0, arr.length - 1)

console.log(arr)
