/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  return verify(postorder, 0, postorder.length - 1);
};

function verify(list, left, right) {
  if (left >= right) return true;
  let i = left;
  while (list[i] < list[right]) i++;
  let j = i;
  while (list[j] > list[right]) j++;
  return j === right && verify(list, left, i - 1) && verify(list, i, j - 1);
}

// vino
