function quickSort(nums) {
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    const partition = (l, r) => {
        const picked = Math.floor(Math.random()*(r-l+1))+l
        swap(l, picked)
        let p = l + 1
        while(p <= r) {
            if(nums[p] <= nums[l]) {
                p++
            } else {
                swap(p, r--)
            }
        }
        swap(l, p-1)
        return p-1
    }
    const recursion = (l, r) => {
        if(l >= r) return
        let index = partition(l, r)
        recursion(l, index-1)
        recursion(index+1, r)
    }
    recursion(0, nums.length - 1)
    return nums
}

//test

const arr = [5, 8,1,3,11,4,9,2,10]
console.log(quickSort(arr))