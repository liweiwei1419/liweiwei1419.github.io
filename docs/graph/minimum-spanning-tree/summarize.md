---
title: 26.6 总结与练习
icon: yongyan
category: 图论
tags:
  - 最小生成树
---

## 总结

最小生成树的 Kruskal 算法和 Prim 算法都基于「切分定理」，我们再回顾一下：「任意横切边的最短边一定数据最小生成树」。

+ Kruskal 算法从最短的边，一条一条开始考虑，如果新考虑的边与已经考虑的边形成环，就抛弃，进而考虑下一条边。
+ Prim 算法可以从任意一个顶点开始，形成切分，考虑最短的横切边，将还未考虑进来的边依次考虑进来，最后切分消失的时候，就找到了最小生成树。

## 「力扣」上关于「最小生成树」的练习

+ 「力扣」第 1135 题：最低成本联通所有城市；
+ 「力扣」第 1168 题：水资源分配优化；
+ 「力扣」第 1489 题：[找到最小生成树里的关键边和伪关键边](https://leetcode-cn.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)


