---
title: 「力扣」第 1456 题：定长子串中元音的最大数目（中等）
icon: yongyan
category: 滑动窗口
tags:
  - 滑动窗口
---


+ 题目链接：[定长子串中元音的最大数目](https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)。

这是一道固定长度的滑动窗口问题。

**参考代码**：

```java
public class Solution {

    public int maxVowels(String s, int k) {
        char[] charArray = s.toCharArray();
        int len = s.length();
        int[] dict = new int[128];
        dict['a'] = 1;
        dict['e'] = 1;
        dict['i'] = 1;
        dict['o'] = 1;
        dict['u'] = 1;

        int count = 0;
        for (int i = 0; i < k; i++) {
            if (dict[charArray[i]] == 1) {
                count++;
            }
        }
        int res = count;


        for (int i = k; i < len; i++) {
            if (dict[charArray[i]] == 1) {
                count++;
            }
            if (dict[charArray[i - k]] == 1) {
                count--;
            }

            res = Math.max(res, count);
        }
        return res;
    }
}
```

