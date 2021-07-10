/**
 * 给你 root1 和 root2 这两棵二叉搜索树。

请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const s1 = [], s2 = [], ans = []
  while (true) {
    // if(root1 || root2) {
    //     if(root1) {
    //         s1.push(root1)
    //         root1 = root1.left
    //     }
    //     if(root2) {
    //         s2.push(root2)
    //         root2 = root2.left
    //     }
    while (root1) {
      s1.push(root1)
      root1 = root1.left
    }
    while (root2) {
      s2.push(root2)
      root2 = root2.left
    }
    if (s1.length || s2.length) {
      let n
      if (s1.length && s2.length) {
        let top1 = s1[s1.length - 1], top2 = s2[s2.length - 1]
        if (top1.val <= top2.val) {
          n = s1.pop()
          ans.push(n.val)
          root1 = n.right
        } else {
          n = s2.pop()
          ans.push(n.val)
          root2 = n.right
        }
      } else if (s1.length) {
        n = s1.pop()
        ans.push(n.val)
        root1 = n.right
      } else {
        n = s2.pop()
        ans.push(n.val)
        root2 = n.right
      }
    } else {
      break
    }
  }
  return ans
};