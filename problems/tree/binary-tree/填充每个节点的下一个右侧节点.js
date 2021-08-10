/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 * !层级遍历
 */
var connect = function (root) {
  if (!root) return root;
  const queue = [];
  queue.push(root);
  let pre, cur;
  while (queue.length) {
    cur = queue.shift();
    if (pre) {
      pre.next = cur;
    }
    pre = cur;
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  cur = root;
  while (cur) {
    cur.next = null;
    cur = cur.right;
  }
  return root;
};

//注意：可以用每次while循环的queue属于同一层的特性
