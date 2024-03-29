# 二叉树相关定理

## 三个重要定理

- 第 i 层至多有 $2^{i-1}$个节点
- 深度为 k 的二叉树，至多有 $2^k-1$ 个节点
- 具有 n 个节点的`完全二叉树`的深度为 $log_2n+1$
  - 证明：
  - 假设具有 n 个节点的完全二叉树的深度为 k,则$2^{k-1}-1 < n <= 2^k-1$
  - 由于 n 和 k 均为整数，所以$2^{k-1}<= n < 2^k$
  - 同时取以 2 为底的对数，可得$k-1<=log_2n<k$
  - 由于 k 为整数，所以可得$k-1 = log_2n$ => $k = log_2n+1$
- 具有 n 个节点的`完全二叉树`的叶子节点个数为`ceil(n/2)`
  - 度为 0 的节点的个数=度为 2 的节点个数+1： $ n_0=n_2+1 $
  - 叶子节点的个数 = ceil(n/2)
