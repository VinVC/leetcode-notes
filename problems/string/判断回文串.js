function test(str) {
  if (str.length <= 1) return true;
  if (str.length === 2) return str[0] === str[1];
  let l = 0,
    r = str.length - 1;
  while (l <= r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}
