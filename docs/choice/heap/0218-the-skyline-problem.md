---
title: 「力扣」第 218 题：天际线问题（困难）
icon: jingxuan
category: 优先队列
tags: 
  - 优先队列
  - 堆
  - 二叉搜索树
---


![0218](https://tva1.sinaimg.cn/large/008i3skNgy1gx93q006ujj30p00anjs2.jpg)

+ 题目链接：[218. 天际线问题](https://leetcode-cn.com/problems/the-skyline-problem/)
+ 题解链接：[优先队列 + 延迟删除技巧（Java）](https://leetcode-cn.com/problems/the-skyline-problem/solution/you-xian-dui-lie-java-by-liweiwei1419-jdb5/)

## 题目描述

城市的天际线是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓。给你所有建筑物的位置和高度，请返回由这些建筑物形成的 **天际线** 。

每个建筑物的几何信息由数组 `buildings` 表示，其中三元组 `buildings[i] = [lefti, righti, heighti]` 表示：

- `lefti` 是第 `i` 座建筑物左边缘的 `x` 坐标。
- `righti` 是第 `i` 座建筑物右边缘的 `x` 坐标。
- `heighti` 是第 `i` 座建筑物的高度。

**天际线** 应该表示为由 “关键点” 组成的列表，格式 `[[x1,y1],[x2,y2],...]` ，并按 **x 坐标** 进行 **排序** 。**关键点是水平线段的左端点**。列表中最后一个点是最右侧建筑物的终点，`y` 坐标始终为 `0` ，仅用于标记天际线的终点。此外，任何两个相邻建筑物之间的地面都应被视为天际线轮廓的一部分。

**注意：**输出天际线中不得有连续的相同高度的水平线。例如 `[...[2 3], [4 5], [7 5], [11 5], [12 7]...]` 是不正确的答案；三条高度为 5 的线应该在最终输出中合并为一个：`[...[2 3], [4 5], [12 7], ...]`

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/12/01/merged.jpg)

```
输入：buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
输出：[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
解释：
图 A 显示输入的所有建筑物的位置和高度，
图 B 显示由这些建筑物形成的天际线。图 B 中的红点表示输出列表中的关键点。
```

**示例 2：**

```
输入：buildings = [[0,2,3],[2,5,3]]
输出：[[0,3],[5,0]]
```

 **提示：**

- $1 <= buildings.length <= 10^4$
- $0 <= left_i < right_i <= 2^{31} - 1$
- $1 <= height_i <= 2^{31} - 1$
- `buildings` 按 $left_i$ 非递减排序