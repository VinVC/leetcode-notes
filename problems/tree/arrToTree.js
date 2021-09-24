function arrToTree(arr) {
  arr.sort((a, b) => a.pid - b.pid);
  const root = arr[0];

  const preocess = (root, node) => {
    let children = root.children || (root.children = []);
    if (root.id === node.pid) {
      children.push(node);
      return true;
    }
    for (let i = 0; i < children.length; i++) {
      if (preocess(children[i], node)) return true;
    }
    return false;
  };

  for (let i = 1; i < arr.length; i++) {
    preocess(root, arr[i]);
  }
  return root;
}

//map方式
function arrToTreeMap(arr) {
  const mp = new Map();
  let root = null;
  let newArr = arr.map(node => {
    let obj = { ...node };
    mp.set(node.id, obj);
    return obj;
  });
  newArr.forEach(node => {
    if (node.pid) {
      let children = mp.get(node.pid).children || (mp.get(node.pid).children = []);
      children.push(node);
    } else {
      root = node;
    }
  });
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
// const tree = arrToTree(arr);
const treeMap = arrToTreeMap(arr);
console.log(treeMap);
console.log(arr);

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

// const arr2 = traverseTreeBfs(tree);
// console.log(arr2);
