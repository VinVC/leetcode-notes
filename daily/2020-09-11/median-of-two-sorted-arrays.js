function findMedianStoredArrays(nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length,
    totalLen = len1 + len2;
  if (totalLen % 2 === 1) {
    let midIndex = Math.floor(totalLen / 2);
    let median = getKthElement(nums1, nums2, midIndex + 1);
    return median;
  } else {
    let midIndex1 = totalLen / 2 - 1,
      midIndex2 = totalLen / 2;
    let median =
      (getKthElement(nums1, nums2, midIndex1 + 1) +
        getKthElement(nums1, nums2, midIndex2 + 1)) /
      2;
    return median;
  }
}

function getKthElement(nums1, nums2, k) {
  let len1 = nums1.length,
    len2 = nums2.length,
    index1 = 0,
    index2 = 0;
  while (true) {
    // 边界
    if (index1 === len1) {
      return nums2[index2 + k - 1];
    }
    if (index2 === len2) {
      return nums1[index1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }
    // 正常
    let half = Math.floor(k / 2);
    let newIndex1 = Math.min(index1 + half, len1) - 1;
    let newIndex2 = Math.min(index2 + half, len2) - 1;
    let pivot1 = nums1[newIndex1];
    let pivot2 = nums2[newIndex2];
    if (pivot1 <= pivot2) {
      k -= newIndex1 - index1 + 1;
      index1 = newIndex1 + 1;
    } else if (pivot1 > pivot2) {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
}

// test
const arr1 = [1, 3, 4, 9];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(findMedianStoredArrays(arr1, arr2));
