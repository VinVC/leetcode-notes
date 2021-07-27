function search2Num(a, b) {
  const maxLen = Math.max(a.length, b.length),
    sa = new Set(),
    sb = new Set();
  for (let i = 0; i < maxLen; i++) {
    sa.add(a[i]);
    sb.add(b[i]);
    if (sa.has(100 - b[i])) {
      return true;
    }
    if (sb.has(100 - a[i])) {
      return true;
    }
  }
  return false;
}

// test

const a = [20, 3],
  b = [1, 10, 50, 20, 60, 90, 70];

console.log(search2Num(a, b));
