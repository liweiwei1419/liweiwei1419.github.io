---
title: 「力扣」第 664 题：奇怪的打印机（困难）
icon: yongyan
category: 动态规划
tags:
  - 动态规划
  - 区间 DP
---

**本题重点**：

+ 「动态规划」没有为一个问题设计专门的算法，考虑了一个问题所有的情况，其实也是「暴力解法」或者称用到了穷举的思想；
+ 处理一个连续的区间的事情，我们常常定义状态是二维的；
+ **区间 DP 问题要做的事情最像「填表」**；
+ 计算顺序很重要，正确的计算顺序，叫保证了求解过程具有「无后效性」。


**题解 |「力扣」第 664 题：[奇怪的打印机](https://leetcode-cn.com/problems/strange-printer/)（困难）**

有台奇怪的打印机有以下两个特殊要求：

- 打印机每次只能打印由 **同一个字符** 组成的序列。
- 每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。

给你一个字符串 `s` ，你的任务是计算这个打印机打印它需要的最少打印次数。

**示例 1：**

```
输入：s = "aaabbb"
输出：2
解释：首先打印 "aaa" 然后打印 "bbb"。
```

**示例 2：**

```
输入：s = "aba"
输出：2
解释：首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
```

**数据范围**：

- $1 \le s.length \le 100$
- `s` 只包含小写英文字母

#### 思路分析

题目只问结果，没有问具体怎么打印，这一类问题可以考虑使用「动态规划」。

「动态规划」考虑了一个问题的 **所有** 子问题，这里「所有」的意思，可以理解为「暴力解法」。综合考虑了所有可能出现的情况。

#### 题目中的关键信息

> 打印机每次只能打印由 **同一个字符** 组成的序列。

这句话这里的「序列」指的是一串「连续的」字符。这一点提示我们可以将子问题设计成完成一个区间中的打印任务需要的最小次数。

#### 定义子问题（定义状态）

`dp[i][j]` 表示：打印字符区间 `s[i..j]` 的最少次数。

#### 找到子问题之间的关系（状态转移方程）


+ 如果首字符和剩下的区间的第 1 个字符相等，可以罗列状态转移方程如下；
+ 如果首字符和剩下的区间的最后 1 个字符相等，可以罗列状态转移方程如下。


**参考代码 1**：

```java 
public class Solution {

    public int strangePrinter(String s) {
        int len = s.length();
        if (len == 0) {
            return 0;
        }

        // dp[i][j] 表示：打印字符区间 s[i..j] 的最少次数
        int[][] dp = new int[len][len];
        for (int i = 0; i < len; i++) {
            dp[i][i] = 1;
        }

        char[] charArray = s.toCharArray();
        for (int i = len - 1; i >= 0; i--) {
            // 初始化
            dp[i][i] = 1;
            for (int j = i + 1; j < len; j++) {
                if (charArray[i] == charArray[j]) {
                    dp[i][j] = dp[i][j - 1];
                    continue;
                }
                int minVal = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    minVal = Math.min(minVal, dp[i][k] + dp[k + 1][j]);
                }
                dp[i][j] = minVal;
            }
        }
        return dp[0][len - 1];
    }
}
```


![](https://files.mdnice.com/user/5576/a33e431c-22c2-4fb1-a04c-e8f6560d587c.png)


（待添加：还可以考虑别的方向。）

**参考代码 2**：


```java
public class Solution {

    public int strangePrinter(String s) {
        int len = s.length();
        int[][] dp = new int[len][len];
        for (int i = 0; i < len; i++) {
            dp[i][i] = 1;
        }

        char[] charArray = s.toCharArray();

        // 阶段：区间长度
        for (int L = 2; L <= len; L++) {
            // 状态：区间左端点
            for (int left = 0; left < len; left++) {
                // 这是因为 right - left + 1 = L
                int right = L + left - 1;
                if (right >= len) {
                    break;
                }

                // 如果 s[left] == s[right] 这是最大值发生的情况
                dp[left][right] = dp[left + 1][right] + 1;
                // 决策：枚举分割的右边界
                for (int k = left + 1; k <= right; k++) {
                    if (charArray[left] == charArray[k]) {

                        if (k == right) {
                            dp[left][right] = Math.min(dp[left][right], dp[left][k - 1]);
                            break;
                        }
                        dp[left][right] = Math.min(dp[left][right], dp[left][k - 1] + dp[k + 1][right]);
                    }
                }
            }
        }
        return dp[0][len - 1];
    }
}
```


![](https://files.mdnice.com/user/5576/617ec28e-07a5-49c3-8f23-1a6e95529cff.png)



