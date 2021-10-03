function decreasingTriplet(nums){
  if(nums.length <=2) return false;
  let f, s
  f = s = -Number.MAX_VALUE;
  for(let val of nums){
    if(val >= f) {
      f = val
    } else if(val >= s) {
      s = val
    } else {
      return true
    }
  }
  return false
}
/**
思路：
找到递减的三元子序列
1.找到最大值
2.找到次大值
3.若存在第三大值，则return true
**/
