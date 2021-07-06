/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const mp = new Map();
var buildTree = function (preorder, inorder) {
  const len = preorder.length;
  for (let i = 0; i < len; i++) {
    mp.set(inorder[i], i);
  }
  return myBuildTree(preorder, inorder, 0, len - 1, 0, len - 1);
};

function myBuildTree(preorder, inorder, preorderLeftIndex, preorderRightIndex, inorderLeftIndex, inorderRightIndex) {
  if (preorderLeftIndex > preorderRightIndex) {
    return null;
  }
  // 前序遍历的第一个节点就是根节点
  let preorderRootIndex = preorderLeftIndex;
  // 在中序遍历中定位根节点的index
  let inorderRootIndex = mp.get(preorder[preorderRootIndex]);
  // 建立根节点
  const root = new TreeNode(preorder[preorderRootIndex]);
  // 计算左子树中的节点数目
  let sizeLeftSubtree = inorderRootIndex - inorderLeftIndex;
  /**
   * 先递归地构造左子树，并连接到根节点
   * 先序遍历中 从【左边界+1开始的sizeLeftSubtree】个元素就对应了中序遍历中【从左边界开始到根节点-1】的元素
   */
  root.left = myBuildTree(preorder, inorder, preorderLeftIndex + 1, preorderLeftIndex + sizeLeftSubtree, inorderLeftIndex, inorderRootIndex - 1);
  /**
   * 构造右子树，并连接到根节点
   * 先序遍历中【从左边界+1+左子树节点数目 开始到 右边界】的元素对应了中序遍历中的【从根节点+1 到 右边界】的元素
   */
  root.right = myBuildTree(preorder, inorder, preorderLeftIndex + 1 + sizeLeftSubtree, preorderRightIndex, inorderRootIndex + 1, inorderRightIndex);

  return root;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// vino im

/**
 * 迭代
 */
function buildTreeIteration(preorder, inorder) {
  if (!preorder || !preorder.length) return null;
  const root = new TreeNode(preorder[0]),
    stack = [];
  stack.push(root);
  let inorderIndex = 0,
    preorderVal,
    curNode = null;
  for (let i = 1; i < preorder.length; i++) {
    preorderVal = preorder[i];
    curNode = stack[stack.length - 1];
    if (curNode.val !== inorder[inorderIndex]) {
      curNode.left = new TreeNode(preorderVal);
      stack.push(curNode.left);
    } else {
      while (stack.length && stack[stack.length - 1].val === inorder[inorderIndex]) {
        curNode = stack.pop();
        inorderIndex++;
      }
      curNode.right = new TreeNode(preorderVal);
      stack.push(curNode.right);
    }
  }
  return root;
}
