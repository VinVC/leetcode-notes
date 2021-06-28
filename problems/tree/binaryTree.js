/**
 * 二叉排序树，又称二叉查找树、二叉搜索树
 * 1）插入
 * 2）遍历：3*递归、4*迭代、1*层级
 * 3）查找插入和删除
 */
//节点定义
class Node {
  constructor(data) {
    this.left = this.right = null;
    this.data = data;
  }
  showData() {
    console.log(this.data);
    return this.data;
  }
}

//树定义
class BianrySortTree {
  constructor(root = null) {
    this.root = root;
  }
  //插入节点
  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            break;
          }
        }
      }
    }
  }

  //先序遍历
  preOrder(root = this.root) {
    if (root) {
      root.showData();
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  //中序遍历
  inOrder(root = this.root) {
    if (root) {
      this.inOrder(root.left);
      root.showData();
      this.inOrder(root.right);
    }
  }

  //后序遍历
  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      root.showData();
    }
  }

  //先序遍历--迭代
  preOrderInteration(root = this.root) {
    const stack = [];
    if (root) stack.push(root);
    while (stack.length) {
      root = stack.pop();
      root.showData();
      if (root.right) {
        stack.push(root.right);
      }
      if (root.left) {
        stack.push(root.left);
      }
    }
  }

  //中序遍历--迭代
  inOrderInteration(root = this.root) {
    const stack = [];
    while (true) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else if (stack.length) {
        root = stack.pop();
        root.showData();
        root = root.right;
      } else {
        break;
      }
    }
  }

  //后序遍历--迭代--1
  postOrderInteration(root = this.root) {
    const stack = [],
      helpArr = [];
    if (root) stack.push(root);
    while (stack.length) {
      root = stack.pop();
      helpArr.push(root.data);
      if (root.left) stack.push(root.left);
      if (root.right) stack.push(root.right);
    }
    helpArr.reverse().forEach(e => {
      console.log(e);
    });
  }

  //后序遍历--迭代--2
  postOrderInteration02(root = this.root) {
    const stack = [],
      unorderedMap = new Map(); //存储节点的遍历状态，遍历左子树之后，右子树之前将node的状态置为1
    while (root || stack.length) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      while (stack.length && unorderedMap.get(stack[stack.length - 1])) {
        stack[stack.length - 1].showData();
        stack.pop();
      }
      if (stack.length) {
        root = stack[stack.length - 1].right;
        unorderedMap.set(stack[stack.length - 1], 1);
      }
    }
    unorderedMap.clear();
  }

  //广度优先--层级遍历
  bfs(root = this.root) {
    const queue = [];
    if (root) queue.push(root);
    while (queue.length) {
      root = queue.shift();
      root.showData();
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
  }

  //查找--前序--迭代--不存在时插入返回true,否则返回false
  insertPreOrderInteration(key, root = this.root) {
    if (!root) return false;
    const stack = [];
    stack.push(root);
    while (stack.length) {
      root = stack.pop();
      if (root.data === key) {
        return false;
      } else if (root.data < key) {
        if (root.right) stack.push(root.right);
      } else {
        if (root.left) stack.push(root.left);
      }
    }
    const node = new Node(key);
    if (key < root.data) {
      root.left = node;
    } else {
      root.right = node;
    }
    return true;
  }
  //查找--前序--迭代--存在时删除返回true,否则返回false
  deletePreOrderInteration(key, root = this.root) {
    if (!root) return false;
    const stack = [];
    stack.push(root);
    while (stack.length) {
      root = stack.pop();
      if (root.data === key) {
        if (!root.left) {
          root = root.right;
          return true;
        }
        if (!root.right) {
          root = root.left;
          return true;
        }
        let q = root, //q是s的双亲节点
          s = root.left; //s指向被删除节点的前驱

        while (s.right) {
          q = s;
          s = s.right;
        }
        root.data = s.data;
        if (q !== root) {
          //连接q的右子树
          q.right = s.left;
        } else {
          //连接q的左子树
          q.left = s.left;
        }
        return true;
      } else if (root.data < key) {
        if (root.right) stack.push(root.right);
      } else {
        if (root.left) stack.push(root.left);
      }
    }
    return false;
  }
}

//for test
(() => {
  const tree = new BianrySortTree();
  const nodes = [31, 36, 20, 68, 54, 33, 11, 24];
  nodes.forEach(e => tree.insert(e));

  console.log("----先序遍历--递归----");
  tree.preOrder();

  console.log("----中序遍历--递归----");
  tree.inOrder();

  console.log("----后序遍历--递归----");
  tree.postOrder();

  console.log("----先序遍历--迭代----");
  tree.preOrderInteration();

  console.log("----中序遍历--迭代----");
  tree.inOrderInteration();

  console.log("----后序遍历--迭代1----");
  tree.postOrderInteration();

  console.log("----后序遍历--迭代2----");
  tree.postOrderInteration02();

  console.log("----广度优先遍历--迭代----");
  tree.bfs();

  console.log("----前序查找--迭代--插入----");
  console.log(tree.insertPreOrderInteration(17));

  console.log("----中序遍历--迭代----");
  tree.inOrderInteration();

  console.log("----前序查找--迭代--删除----");
  console.log(tree.deletePreOrderInteration(31));

  console.log("----中序遍历--迭代----");
  tree.inOrderInteration();
})();
