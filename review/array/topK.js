/**
 * 需求：找出数组中第k大的数
 * 策略：分治
 * 分解：
 * 1. 面对任意子数组，随机选取一个参考值，对比此参考值将子数组分成大于等于区和小于区，指针指向分界线
 * 2. 如果分界线的index刚好等于k-1,则返回
 * 3. 如果分界线index小于k-1, 那么，目标值在小于区，对小于区执行1
 * 4. 如果分界线index大于k-1, 那么，目标值在大于区，对大于区执行1
 * 
 * @param {*} nums 
 * @param {*} k 
 */
function findTokLargeK(nums, k) {
    function recursion(l, r) {
        if(l >= r) return nums[l]
        let index = partition(nums, l, r)
        if(index === k-1) return nums[index]
        return index < k-1 ? recursion(index+1, r) : recursion(l, index-1)
    }
    return recursion(0, nums.length-1)
}



function partition(nums, l, r) {
    let picked = Math.floor(Math.random()*(r-l+1))+l
    swap(nums, picked, l)
    let pointer = l+1
    while(pointer <= r) {
        if(nums[pointer] < nums[l]) {
            swap(nums, pointer, r--)
        } else if(nums[i] >= nums[l]) {
            pointer++
        }
    }
    swap(nums, pointer-1, l)
    return pointer - 1
}

function swap(nums, i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
}