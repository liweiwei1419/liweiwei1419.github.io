---
title: 「力扣」第 1658 题：将 x 减到 0 的最小操作数（中等）
icon: yongyan
category: 滑动窗口
tags:
  - 滑动窗口
---

+ 题目链接：[将 x 减到 0 的最小操作数](https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/)。

给你一个整数数组 nums 和一个整数 x 。**每一次操作时，你应当移除数组 nums 最左边或最右边的元素**，然后从 x 中减去该元素的值。请注意，需要 **修改** 数组以供接下来的操作使用。

如果可以将 `x` **恰好** 减到 `0` ，返回 **最小操作数** ；否则，返回 `-1` 。

- `1 <= nums[i] <= 104`

方法一：前缀和 + 二分查找

方法二：滑动窗口（不是固定长度，是固定保留值的滑动窗口）

> 剩下的只可能是数组的一个连续区间。

**这里保留值 = sum(数组) - x**

```java
import java.util.Arrays;

public class Solution {

    public int minOperations(int[] nums, int x) {
        int len = nums.length;
        int count = Arrays.stream(nums).sum() - x;
        if (count < 0) {
            return -1;
        }

        int left = 0;
        int right = 0;
        int windowSum = 0;
        // 这里要注意
        int maxLength = -1;
        while (right < len) {
            windowSum += nums[right];
            right++;
            while (windowSum > count) {
                windowSum -= nums[left];
                left++;
            }

            // 思考：为什么代码要放在这里
            if (windowSum == count) {
                maxLength = Math.max(maxLength, right - left);
            }
        }

        if (maxLength == -1) {
            return -1;
        }
        // 最少移除多少个元素，就是滑动窗口的最大长度
        return len - maxLength;
    }
}
```

