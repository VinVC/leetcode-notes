/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums || !nums.length) return [[]]
  const ans = []
  dfs(ans, nums, [])
  return ans
}

function dfs(ans, deq, path) {
  if (!deq.length) {
    ans.push([...path])
    return
  }
  let size = deq.length
  for (let i = 0; i < size; i++) {
    let num = deq.shift()
    path.push(num)
    dfs(ans, deq, path)
    deq.push(num) //vino 在该步这个已经选过了，所以该步后续不再选它，但是它在后续的步骤依然可选，所以要把它push回去。 shift出来再push回去。
    path.pop()
  }
}

// test
let nums = [1, 2, 3]

console.log(permute(nums))
