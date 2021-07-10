/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if(!root) return null
  const stack = []
  let pre, head
  while(true) {
    if(root) {
      stack.push(root)
      root = root.left
    } else if(stack.length) {
      let n = stack.pop()
      if(!pre) {
        head = n
      } else {
        pre.right = n
        n.left = pre
      }
      root = n.right
      pre = n
    } else {
      pre.right = head
      head.left = pre
      return head
    }
  }
};