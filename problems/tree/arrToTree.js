function arrToTree(arr) {
  arr.sort((a, b) => a.pid - b.pid);
  const root = arr[0];

  const preocess = (root, node) => {
    let children = root.children || (root.children = []);
    if (root.id === node.pid) {
      children.push(node);
      return true;
    } else {
      for (let i = 0; i < children.length; i++) {
        if (preocess(children[i], node)) return true;
      }
    }
    return false;
  };

  for (let i = 1; i < arr.length; i++) {
    preocess(root, arr[i]);
  }
  return root;
}

//test

const arr = [
  { id: 1, pid: null },
  { id: 2, pid: 1 },
  { id: 3, pid: 1 },
  { id: 4, pid: 2 },
  { id: 5, pid: 4 },
  { id: 6, pid: 5 },
];
const tree = arrToTree(arr);
console.log(tree);

function traverseTreeBfs(root) {
  const ans = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let node = queue.shift();
    ans.push(node);
    if (node.children && node.children.length) {
      let children = node.children;
      delete node.children;
      queue.push(...children);
    }
  }
  return ans;
}

const arr2 = traverseTreeBfs(tree);
console.log(arr2);
