/**
 * 合并两个数组，在合并之后的数组中各个数组的元素保持其在原数组中的相对位置不变
 * @param {number[]} list1
 * @param {number[]} list2
 * @returns number[][]
 */
function merge2List(list1, list2) {
  const ans = [],
    len = list1.length + list2.length;
  dfs(
    len,
    ans,
    [
      [list1, 0],
      [list2, 0],
    ],
    []
  );
  return ans;
}

function dfs(len, ans, dequeue, path) {
  if (path.length === len || !dequeue.length) {
    ans.push([...path]);
    return;
  }
  let size = dequeue.length; //size就是当前层级的宽度
  for (let i = 0; i < size; i++) {
    let numArr = dequeue.shift();
    let list = numArr[0],
      index = numArr[1];
    path.push(list[index]);

    if (index + 1 < list.length) dequeue.push([list, index + 1]);

    dfs(len, ans, dequeue, path);

    if (index + 1 < list.length) dequeue.pop();
    dequeue.push(numArr); //即使push回去当前步也不会再选了，但是后面的步要用

    path.pop();
  }
}

//test
let arr1 = [2, 1, 3],
  arr2 = [7, 8, 6];
console.log(merge2List(arr1, arr2));
