function heapSort(nums) {
    const len = nums.length
    //构建一个大根堆
    for(let i = (len>>1) -1; i>=0; i--) {
        heapify(nums, i, len)
    }
    let heapSize = len
    while(heapSize > 1) {
        swap(nums, 0, --heapSize)
        heapify(nums, 0, heapSize)
    }
    return nums
}

/**
 * 升序：大根堆
 * 降序：小根堆
 * @param {*} nums 
 * @param {*} i 
 * @param {*} heapSize 
 */
function heapify(nums, i, heapSize) {
    let left = 2 * i + 1
    while(left < heapSize) {
        let larger = left + 1 < heapSize && nums[left + 1] > nums[left] ? left + 1 : left
        larger = nums[larger] > nums[i] ? larger : i
        if(larger === i) break;
        swap(nums, i, larger)
        i = larger
        left = 2*i + 1
    }
}
function swap(nums, i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
}
//test

const arr = [5, 8,1,3,11,4,9,2,10]
console.log(heapSort(arr))