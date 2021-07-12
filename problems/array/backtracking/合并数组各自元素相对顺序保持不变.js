function merge(l1, l2) {
  const ans = [];
  let len1 = l1.length,
    len2 = l2.length,
    len = len1 + len2;
  dfs(ans, len, l1, l2, 0, 0, []);
  return ans;
}

function dfs(ans, len, l1, l2, index1, index2, curList) {
  if (curList.length === len) {
    ans.push([...curList]);
    return;
  }
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      if (index1 >= l1.length) continue;
      curList.push(l1[index1]);
      dfs(ans, len, l1, l2, index1 + 1, index2, curList);
      curList.pop();
    }
    if (i === 1) {
      if (index2 >= l2.length) continue;
      curList.push(l2[index2]);
      dfs(ans, len, l1, l2, index1, index2 + 1, curList);
      curList.pop();
    }
  }
}

//test
let arr1 = [2, 1, 3],
  arr2 = [7, 8, 6];
console.log(merge(arr1, arr2));
