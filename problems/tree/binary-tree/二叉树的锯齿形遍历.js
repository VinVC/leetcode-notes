/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [[]];
  const ans = [];
  const queue = [root];
  let isOrderLeft = true;
  while (queue.length) {
    const levelList = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (isOrderLeft) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return ans;
};

//vino im
// 关键：每一次while循环的queue中的所有元素属于同一层
