/**
 * 给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。

进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？

链接：https://leetcode-cn.com/problems/recover-binary-search-tree

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function inOrderInteration(root) {
  const stack = [],
    ans = [];
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      let n = stack.pop();
      ans.push(n.val);
      root = n.right;
    } else {
      break;
    }
  }
  return ans;
}
function findTwoSwapped(nums) {
  let len = nums.length,
    x = -1,
    y = -1;
  for (let i = 0; i < len; i++) {
    if (nums[i + 1] < nums[i]) {
      y = nums[i + 1];
      if (x === -1) {
        x = nums[i];
      } else {
        break;
      }
    }
  }
  return [x, y];
}

const recover = (r, count, x, y) => {
  if (r !== null) {
    if (r.val === x || r.val === y) {
      r.val = r.val === x ? y : x;
      if (--count === 0) {
        return;
      }
    }
    recover(r.left, count, x, y);
    recover(r.right, count, x, y);
  }
};

var recoverTree = function (root) {
  const nums = inOrderInteration(root);
  const [first, second] = findTwoSwapped(nums);
  recover(root, 2, first, second);
};

//vino
