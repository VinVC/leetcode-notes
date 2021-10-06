/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!nums || !nums.length) return [[]]
  const ans = []
  dfs(nums, ans, [])
  return ans
}

function dfs(deq, ans, cur) {
  if (!deq.length) {
    ans.push([...cur])
    return
  }
  let size = deq.length,
    mp = new Map()
  for (let i = 0; i < size; i++) {
    let num = deq[0]
    if (mp.has(num)) {
      deq.shift()
      deq.push(num)
      continue
    }
    deq.shift()
    cur.push(num)
    mp.set(num, true)
    dfs(deq, ans, cur)
    deq.push(num)
    cur.pop()
  }
}
