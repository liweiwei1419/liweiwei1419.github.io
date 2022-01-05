---
title: 「力扣」第 79 题：单词搜索（中等）
icon: yongyan
categories: 专题 14：回溯算法
tags:
  - 回溯算法
  - 递归
  - 树形问题
  - 深度优先遍历
  - 字符串
---

+ 题目链接：[79. 单词搜索](https://leetcode-cn.com/problems/word-search/)；
+ 题解链接：[回溯算法（Java）](https://leetcode-cn.com/problems//solution/zai-er-wei-ping-mian-shang-shi-yong-hui-su-fa-pyth/)。

## 题目描述

> 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
>
> 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
>
> 示例：
>
> ```
> board =
> [
>   ['A','B','C','E'],
>   ['S','F','C','S'],
>   ['A','D','E','E']
> ]
> ```
>
> 给定 `word = "ABCCED"`, 返回 `true`.
> 给定 `word = "SEE"`, 返回 `true`.
> 给定 `word = "ABCB"`, 返回 `false`.

