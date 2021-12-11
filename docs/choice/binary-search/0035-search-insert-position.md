---
title: 「力扣」第 35 题：搜索插入位置（简单）
icon: jingxuan
category: 二分查找
tags: 
  - 二分查找
---

![0035](https://tva1.sinaimg.cn/large/008i3skNgy1gx8jfpbcuxj30p00ant9b.jpg)

+ [链接](https://leetcode-cn.com/problems/search-insert-position)
+ [题解链接](https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/)



## 题目描述

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

**示例 1：**

```
输入: [1, 3, 5, 6], 5
输出: 2
```

**示例 2：**

```
输入: [1, 3, 5, 6], 2
输出: 1
```

**示例 3：**

```
输入: [1, 3, 5, 6], 7
输出: 4
```

**示例 4：**

```
输入: [1, 3, 5, 6], 0
输出: 0
```

**示例 5:**

```
输入: nums = [1], target = 0
输出: 0
```

::: danger 关键
写对「二分查找」的重点，从来不在于二分查找怎么写，而在于分析题意，根据题目的条件和要求思考如何缩减区间。

在学习「二分查找」以及其它算法和数据结构的过程中，我们可能会有各种各样的疑问，把它们记录下来，一旦思考得多了，很多问题自然而然就有答案。

:::

## 题意分析

根据示例，分析题目要我们返回的「插入元素的位置」到底是什么。根据示例 3：

```
输入: [1, 3, 5, 6], 7
输出: 4
```

如果目标元素大于输入数组中的最后一个元素，题目需要我们返回数组的最后一个元素的下标 + 1。又根据示例 2：

```
输入: [1, 3, 5, 6], 2
输出: 1
```

因此题目需要我们返回第 1 个 **大于等于**（等于的情况可以看示例 1） 目标元素 `2` 的下标，因此返回 `1`。

## 思路分析

在有序数组中查找，可以使用「二分查找」。

根据「题意分析」中对示例的描述， **如果当前 `mid` 看到的数值严格小于 `target`，那么 `mid` 以及 `mid` 左边的所有元素就一定不是题目要求的结果**，根据这一点可以写出本题二分查找算法的完整逻辑。

**参考代码 1**：

```Java []
public class Solution {

    public int searchInsert(int[] nums, int target) {
        int len = nums.length;
        // 特殊判断
        if (nums[len - 1] < target) {
            return len;
        }

        // 程序走到这里一定有 nums[len - 1] >= target
        int left = 0;
        int right = len - 1;
        // 在区间 nums[left..right] 里查找第 1 个大于等于 target 的元素的下标
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < target){
                // 下一轮搜索的区间是 [mid + 1..right]
                left = mid + 1;
            } else {
                // 下一轮搜索的区间是 [left..mid]
                right = mid;
            }
        }
        return left;
    }
}
```

**说明**：由于执行到最后 `nums[left..right]` 里一定存在插入元素的位置，退出循环的时候一定有 `left == right` 成立，因此返回 `left` 或者 `right` 都可以。

**复杂度分析**：

+ 时间复杂度：$O(\log N)$，这里 $N$ 是输入数组的长度；
+ 空间复杂度：$O(1)$。

既然 `len` 也有可能是答案，可以在初始化的时候，把 `right` 设置成 `len`，此时就不需要特殊判断了。

**参考代码 2**：

```Java []
public class Solution {

    public int searchInsert(int[] nums, int target) {
        int len = nums.length;
        int left = 0;
        int right = len;
        // 在区间 nums[left..right] 里查找第 1 个大于等于 target 的元素的下标
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < target){
                // 下一轮搜索的区间是 [mid + 1..right]
                left = mid + 1;
            } else {
                // 下一轮搜索的区间是 [left..mid]
                right = mid;
            }
        }
        return left;
    }
}
```

**复杂度分析**：（同参考代码 1）

---


我讲解的算法特别适合新手朋友。欢迎大家关注我的公众号「算法不好玩」，B 站关注「liweiwei1419」。

