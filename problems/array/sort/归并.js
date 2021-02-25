/**
 * !归并排序流程
 * !时间复杂度：O(nlogn)
 * !空间复杂度 O(n)
 * 1）将一个数组从中间一分为二
 * 2) 分别对左右数组进行排序
 * 3）将排好序的左右数组合并到一个数组中
 */

function mergeSort(arr) {
  let len = arr.length
  process(arr, 0, len - 1)
}

function process(arr, L, R) {
  if (L === R) return
  let mid = L + ((R - L) >> 1)
  process(arr, L, mid)
  process(arr, mid + 1, R)
  merge(arr, L, mid, R)
}

function merge(arr, L, mid, R) {
  const helpArr = []
  let i = 0,
    p1 = L,
    p2 = mid + 1
  while (p1 <= mid && p2 <= R) {
    helpArr[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= mid) {
    helpArr[i++] = arr[p1++]
  }
  while (p2 <= R) {
    helpArr[i++] = arr[p2++]
  }
  for (let i = 0; i < helpArr.length; i++) {
    arr[L + i] = helpArr[i]
  }
}

const arr = [3, 4, 2, 0, 8]
mergeSort(arr)
console.log(arr)
