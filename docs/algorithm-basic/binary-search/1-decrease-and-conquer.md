---
title: 7.1 基本思想：减而治之
icon: yongyan
category: 二分查找
tags:
  - 减治思想
---

::: danger 注意
虽然网上提供了很多二分查找的「模板」，但其实它们都大同小异，基本的思想都是「逐渐缩小搜索区间（减而治之）」。

我们应该多做问题、思考、总结。

我们在这一部分也会逐个解释这些模板写法的异同。
:::


## 逐渐缩小搜索区间

减而治之（Decrease and Conquer），即：逐渐缩小搜索区间。

二分查找是一个思想很简单的算法。

在我还没有系统学习《算法与数据结构》的时候，我就知道这个算法。但那个时候，只是作为一个练习，写了一个二分查找算法，自己造了一个数据，运行一下就算完。

二分查找法的写法有比较多种。我在「力扣」上做题的过程中，也进行了学习和总结。

## 最基本问题

我最早认识的二分查找算法是：在一个有序数组里查找一个数，如果找到就返回这个数在有序数组里的下标，找不到就返回 $-1$。

这个问题在「力扣」上是第 704 题：[二分查找](https://leetcode-cn.com/problems/binary-search)，我们在下一节向大家介绍。

## 例：「力扣」第 704 题：二分查找（简单）

+ [题目链接](https://leetcode-cn.com/problems/binary-search)

给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target` ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 -1。

**示例 1**：

```
输入: nums = [-1, 0, 3, 5, 9, 12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

**示例 2**：

```
输入: nums = [-1, 0, 3, 5, 9, 12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

**提示**：

1. 你可以假设 `nums` 中的所有元素是不重复的。
2. `n` 将在 `[1, 10000]` 之间。
3. `nums` 的每个元素都将在 `[-9999, 9999]` 之间。

### 解题思路

::: danger 基本想法

在循环中做判断，每一轮通过目标元素与中间元素的大小将搜索区间分为 3 个部分。根据看到的中间元素的数值，想清楚下一次搜索的区间是什么，进而设置 `left` 或者 `right` 的值。

:::

**具体做法**：

+ 先看中间的数与目标元素的关系，如果等于目标元素，就直接返回中间的数的索引；
+ 如果中间的数比目标元素大，那么中间位置右边的数也一定比目标元素大，即中间位置右边的数也一定不是目标元素，目标元素只可能在中间位置的左边出现，因此把右边界设置为 `mid - 1` ，即 `right = mid - 1`；（同理看待另一边）
+ 如果中间的数比目标元素小，那么中间位置左边的数也一定比目标元素小，即中间位置左边的数也一定不是目标元素，目标元素只可能在中间位置的右边出现，因此把左边界设置为 `mid + 1` ，即 `left = mid + 1`。

**参考代码 1**：循环写法

```java
public class Solution {

    public int search(int[] nums, int target) {
        int len = nums.length;
        if (len == 0) {
            return -1;
        }
        // 在 [left..right] 区间里查找 target
        int left = 0;
        int right = len - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                // 下一轮搜索区间：[left..mid - 1]
                right = mid - 1;
            } else {
                // 此时 nums[mid] < target
                // 下一轮搜索区间：[mid + 1..right]
                left = mid + 1;
            }
        }
        // 走到这里，就可以判定输入数组里不存在目标元素，返回 -1
        return -1;
    }
}
```

**说明**：在 `while` 里面要写 `left <= right` ，这是因为当 `left == right` 成立的时候，搜索区间里仍然有一个数，就是 `nums[left]` 还没有看，因此这个思路的二分查找算法要写等于号。


**复杂度分析**：

+ 时间复杂度：$O(\log N)$，这里 $N$ 是数组的元素个数，每次排除当前候选区间一半以上的元素，因此是对数级别的时间复杂度；
+ 空间复杂度：$O(1)$，只使用了常数个的临时变量。

**参考代码 2**：递归写法

::: danger 提示
递归写法仅供参考，实际做题的过程中几乎不会用递归实现二分查找。
:::

```java
public class Solution {

    public int search(int[] nums, int target) {
        int len = nums.length;
        if (len == 0) {
            return -1;
        }
        return binarySearch(nums, target, 0, len - 1);
    }
  
	/**
     * 在数组 arr 的子区间 [left..right] 里搜索目标元素
     *
     * @param arr    数组
     * @param target 目标元素
     * @param left   左边界下标，包括 left
     * @param right  右边界下标，包括 right
     * @return
     */
    private static int binarySearch(int[] arr, int target, int left, int right) {
        // 先处理递归到底的情况
        if (left > right) {
            // 不能形成区间，返回 -1 表示没有找到
            return -1;
        }
        int mid = (left + right) / 2;
        if (target == arr[mid]) {
            // 找到了，就将目标元素的索引返回
            return mid;
        } else if (target < arr[mid]) {
            // 既然是有序数组，目标元素的值比中间元素还要小，就应该在中间元素的左边去找
            return binarySearch(arr, target, left, mid - 1);
        } else {
            // 既然是有序数组，目标元素的值比中间元素还要大，就应该在中间元素的右边去找
            return binarySearch(arr, target, mid + 1, right);
        }
    }
}
```

**复杂度分析**：

+ 时间复杂度：$O(\log N)$，这里 $N$ 是数组的元素个数，每次排除当前候选区间一半以上的元素，因此是对数级别的时间复杂度；
+ 空间复杂度：$O(\log N)$，这里用到了「递归」，递归需要借助「栈」，「栈」的高度为 $O(\log N)$。