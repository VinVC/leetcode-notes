function midu(nums) {
  const all = nums.reduce((acc, cur) => acc.concat(cur), []);
  all.sort((a, b) => b - a);
  console.log(all);
  const ans = [];
  let start = 0,
    len = all.length;
  while (true) {
    ans.unshift(all.slice(start, start + 4).reverse());
    start += 4;
    if (start >= len) break;
  }
  return ans;
}

//test

const arr = [[80, 90], [80, 90, 100, 110], [80], [100, 110], [80, 110], [80, 90], [80, 100]];

console.log(midu(arr));
