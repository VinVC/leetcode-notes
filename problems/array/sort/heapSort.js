function heapSort(arr) {
  // 从上往下建立大根堆
  // 最好从下往上建立堆
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    heapify(arr, 0, heapSize);
    swap(arr, 0, --heapSize);
  }
}

/**
 *
 * @param {Array} arr
 * @param {Number} index 新加入的数或者变大的数
 * @description 某个数处于index位置，往上继续移动。用途：新加入数、某个位置变化了，重新调整成大根堆
 * 上移
 */
function heapInsert(arr, index) {
  while (index > 0 && arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1);
    index = (index - 1) >> 1;
  }
}

/**
 *
 * @param {Array} arr
 * @param {Number} index 要向下移动的位置
 * @param {Number} heapSize 堆的长度
 * @description 某个处于index的元素向下移动；新加了某个数或者某个数变小了，重新调整大根堆
 * 下移
 */
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1; //左孩子
  while (left < heapSize) {
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) break;
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
