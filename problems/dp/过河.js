function riverRecursion(arr, n) {
  if (n === 1) return 2 * arr[2];
  if (n === 2) return arr[2];
  return Math.min(
    riverRecursion(arr, n - 1) + arr[1] + arr[n],
    riverRecursion(arr, n - 2) + arr[1] + 2 * arr[2] + arr[n]
  );
}
// test
const arr = [0, 1, 2, 5, 10];
console.log(riverRecursion(arr, arr.length - 1));
