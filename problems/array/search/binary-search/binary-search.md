## 右逼近

```js
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    ans = arr.length;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] >= target) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
```

## 左逼近

```js
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    ans = arr.length;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] <= target) {
      left = mid + 1;
      ans = mid;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}
```
