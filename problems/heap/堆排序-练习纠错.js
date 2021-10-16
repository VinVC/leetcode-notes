function heapSort(nums) {
  const len = nums.length
  // 要点二：i= Math.floor(len/2)-1; 而不是Math.floor(len/2)
  for (let i = (len >> 1) - 1; i >= 0; i--) {
    heapify(nums, i, len)
  }
  //要点三：循环将heapsize-1位置的数和0交换
  // let heapSize = len
  // for (let i = 0; i < heapSize; i++) {
  //   swap(nums, i, --heapSize)
  //   heapify(nums, i, heapify)
  // }
  // for (let i = len - 1; i > 0; i--) {
  //   swap(nums, 0, i)
  //   heapify(nums, 0, i)
  // }
  // 要点四：for循环不够直观和语义化
  let heapSize = len
  while (heapSize > 1) {
    swap(nums, 0, --heapSize)
    heapify(nums, 0, heapSize)
  }

  return nums
}

function heapify(nums, index, heapSize) {
  let left = 2 * index + 1
  //要点一：left<heapSize.而不是<=
  while (left < heapSize) {
    let right = left + 1
    let larger = right < heapSize && nums[right] > nums[left] ? right : left
    larger = nums[larger] > nums[index] ? larger : index
    if (larger === index) return
    swap(nums, larger, index)
    index = larger
    left = 2 * index + 1
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [6, 3, 10, 9, 18, 50, 2, 0, 22, 11]

console.log(heapSort(arr))
